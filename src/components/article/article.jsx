import React from 'react';
import { Col, Image, Row, Card } from 'react-bootstrap';
import SectionLayout from '../layouts/sectionLayout';

import './article.css';

const buildTitleWithHighlight = (title, titleHighlightWordPosition) => {
  const titleWords = title.split(' ');
  const titleHighlightWord = titleWords[titleHighlightWordPosition];
  const titleHighlightWordWithSpan = `<span class='highlight'>${titleHighlightWord}</span>`;
  const titleWordsWithHighlight = titleWords.map((word, index) => {
    if (index === titleHighlightWordPosition) {
      return titleHighlightWordWithSpan;
    }
    return word;
  });
  const finalMarkup = titleWordsWithHighlight.join(' ');
  return <div dangerouslySetInnerHTML={{ __html: finalMarkup }} />;
}

function Article({
  image,
  imageAlt,
  title,
  paragraph,
  order,
  titleHighlightWordPosition = 0,
}) {

  return (
    <SectionLayout>
      <Row className="align-items-center">
        {order == 1 && (
          <>
            <Col xs={12} md={6}>
              <Card className="border-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  className="text-end"
                  width="100%"
                />
              </Card>
            </Col>
            <Col xs={12} md={6} className="text-start">
              <h1 className="fancy_title display-4 fw-bold">
                {buildTitleWithHighlight(title, titleHighlightWordPosition)}
              </h1>
              <p className="mt-4">{paragraph}</p>
            </Col>
          </>
        )}

        {order == 2 && (
          <>
            <Col xs={12} md={6} className="text-start">
              <h2 className="fancy_title display-4 fw-bold">
                {buildTitleWithHighlight(title, titleHighlightWordPosition)}
              </h2>
              <p className="mt-4">{paragraph}</p>
            </Col>
            <Col xs={12} md={6}>
              <Card className="border-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  className="text-end"
                  width="100%"
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
    </SectionLayout>
  );
}

export default Article;