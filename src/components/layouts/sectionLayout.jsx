import { Container } from 'react-bootstrap'

function SectionLayout({
  children,
  className = '',
  style = {},
  isContained = true,
  hasMarginTop = true,
}) {
  return (
    <>
      {isContained === true && (
        <Container fluid="sm" className={hasMarginTop? 'mt-5 pt-5 ':'' + `${className}`} style={style}>
          {children}
        </Container>
      )}
      {!isContained && (
        <section className={`${className}`} style={style}>
          {children}
        </section>
      )}
    </>
  );
}

export default SectionLayout;