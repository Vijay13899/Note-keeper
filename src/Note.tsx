import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type NoteProps = {
    onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
    const note = useNote();
    const navigate = useNavigate();
    const contentRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
        if (contentRef.current) {
            const canvas = await html2canvas(contentRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(note.title+'.pdf');
        }
    };

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
                        <Button onClick={handleDownloadPDF} variant="outline-secondary" className="fw-semibold">
                            Download as PDF
                        </Button>
                    </Stack>
                </Col>
            </Row>

            {/* Markdown Content */}
            <Card className="shadow-sm border-0 bg-light">
                <Card.Body ref={contentRef}>
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