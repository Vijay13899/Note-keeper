import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";
import PDFDocument from "./PDFDocument";
import {PDFDownloadLink} from "@react-pdf/renderer";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
      <div className="p-4">
        {/* Header Section */}
        <Row className="align-items-center mb-4">
          <Col>
            <h1 className="fw-bold">{note.title}</h1>
            {note.tags.length > 0 && (
                <Stack gap={1} direction="horizontal" className="flex-wrap">
                  {note.tags.map((tag) => (
                      <Badge
                          className="bg-success text-white me-2 text-truncate fs-6 p-2"
                          key={tag.id}
                      >
                        {tag.label}
                      </Badge>
                  ))}
                </Stack>
            )}
          </Col>
          <Col xs="auto">
            <Stack gap={2} direction="horizontal">
              <Link to={`/${note.id}/edit`}>
                <Button variant="primary" className="fw-semibold">
                  Edit
                </Button>
              </Link>
                <PDFDownloadLink
                    document={<PDFDocument markdown={note.markdown} />}
                    fileName={`${note.title}.pdf`}
                    className="btn btn-primary"
                >
                    Download as PDF
                </PDFDownloadLink>
              <Button
                  onClick={() => {
                    onDelete(note.id);
                    navigate("/");
                  }}
                  variant="outline-danger"
                  className="fw-semibold"
              >
                Delete
              </Button>
              <Link to="/">
                <Button variant="outline-secondary" className="fw-semibold">
                  Back
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>

        {/* Markdown Content */}
        <Card className="shadow-sm border-0 bg-light">
          <Card.Body>
            <ReactMarkdown className="markdown-content fs-5 text-muted">
              {note.markdown}
            </ReactMarkdown>
          </Card.Body>
        </Card>

        {/* Timestamp */}
        <div className="text-end mt-3">
          <small className="text-secondary fst-italic">
            Last Updated: {new Date().toLocaleDateString()}{" "}
            {new Date().toLocaleTimeString()}
          </small>
        </div>
      </div>
  );
}
