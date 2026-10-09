"""Build the bundled résumés from exported portfolio data. Requires ReportLab and DejaVu Sans."""
import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
parser = argparse.ArgumentParser()
parser.add_argument('data', type=Path)
parser.add_argument('--font-dir', type=Path, default=Path('/usr/share/fonts/truetype/dejavu'))
args = parser.parse_args()
data = json.loads(args.data.read_text())
pdfmetrics.registerFont(TTFont('Portfolio', str(args.font_dir / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('PortfolioBold', str(args.font_dir / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('Portfolio', normal='Portfolio', bold='PortfolioBold')
styles = getSampleStyleSheet()
for name, size, leading, color in [('TitleCV', 20, 25, '#172a35'), ('RoleCV', 11, 16, '#17685c'), ('BodyCV', 9, 14, '#40545a'), ('HeadingCV', 12, 18, '#17685c'), ('JobCV', 10, 15, '#172a35'), ('SmallCV', 8, 12, '#63717b')]:
    styles.add(ParagraphStyle(name, fontName='Portfolio', fontSize=size, leading=leading, textColor=colors.HexColor(color), spaceAfter=7))

def paragraph(text, style='BodyCV'):
    return Paragraph(escape(text).replace('–', '-').replace('—', '-'), styles[style])
for locale, content in data['contentByLocale'].items():
    t = data['labels'][locale]
    profile = content['profile']
    story = []

    def section(title):
        story.extend([Spacer(1, 9), paragraph(title, 'HeadingCV')])

    def experience(item):
        block = [paragraph(item['company'] + ' | ' + item['role'], 'JobCV'), paragraph(item['period'], 'SmallCV')]
        block += [paragraph('• ' + line) for line in item['contributions']]
        block.append(Spacer(1, 7))
        story.append(KeepTogether(block))
    story += [paragraph(profile['fullName'], 'TitleCV'), paragraph(profile['headline'], 'RoleCV'), paragraph(profile['location'] + ' | ' + profile['phone'] + ' | ' + profile['email'], 'SmallCV')]
    portfolio = 'https://www.pietrocosentino.com.br' + ('' if locale == 'pt' else '/' + locale)
    story.append(Paragraph('<link href="' + profile['linkedin'] + '">LinkedIn</link> | <link href="' + portfolio + '">' + t['profile'] + '</link>', styles['SmallCV']))
    section(t['resumeSummary'])
    story.append(paragraph(profile['summary']))
    section(t['resumeSkills'])
    story.append(paragraph(' · '.join((item['title'] for item in content['competencies']))))
    section(t['professionalExperience'])
    for item in content['experiences'][:3]:
        experience(item)
    story.append(PageBreak())
    story.append(paragraph(profile['fullName'], 'JobCV'))
    section(t['resumeContinuation'])
    for item in content['experiences'][3:]:
        experience(item)
    section(t['education'])
    for item in content['education']:
        story.append(paragraph(item['title'] + ' | ' + item['institution'] + ' | ' + item['status']))
    section(t['credentials'])
    for item in content['credentials']:
        story.append(paragraph(item['title'] + ' | ' + item['issuer']))
    section(t['languages'])
    story.append(paragraph(t['englishLevel']))
    out = Path('public') / profile['resumePath'].lstrip('/')
    out.parent.mkdir(parents=True, exist_ok=True)

    def footer(canvas, doc):
        canvas.saveState()
        canvas.setFont('Portfolio', 8)
        canvas.setFillColor(colors.HexColor('#63717b'))
        canvas.drawString(42, 25, profile['name'])
        canvas.drawRightString(A4[0] - 42, 25, str(doc.page))
        canvas.restoreState()
    SimpleDocTemplate(str(out), pagesize=A4, leftMargin=42, rightMargin=42, topMargin=35, bottomMargin=40, title=profile['name'] + ' - ' + t['resume'], author=profile['name']).build(story, onFirstPage=footer, onLaterPages=footer)
    print(out)
