import { FormEvent, useRef, useState } from "react"
import { Button, Col, Form, Row, Stack, Card, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { NoteData, Tag } from "./App"
import { v4 as uuidV4 } from "uuid"
import MDEditor from "@uiw/react-md-editor"


type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>

export function NoteForm({
                           onSubmit,
                           onAddTag,
                           availableTags,
                           title = "",
                           tags = [],
                         }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const [markdown,setMarkdown] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown:markdown,
      tags: selectedTags,
    })

    navigate("..")
  }

  return (
      <Container className="my-5">
        <Card className="shadow bg-light">
          <Card.Body className="p-4">
            <Form onSubmit={handleSubmit} className="p-4 rounded shadow bg-white">
              <Stack gap={4}>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="title" className="mb-3">
                      <Form.Label className="text-secondary fw-semibold">Title</Form.Label>
                      <Form.Control
                          ref={titleRef}
                          required
                          defaultValue={title}
                          placeholder="Enter note title"
                          className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="tags">
                      <Form.Label className="text-secondary fw-semibold">Tags</Form.Label>
                      <CreatableReactSelect
                          onCreateOption={(label) => {
                            const newTag = { id: uuidV4(), label }
                            onAddTag(newTag)
                            setSelectedTags((prev) => [...prev, newTag])
                          }}
                          value={selectedTags.map((tag) => {
                            return { label: tag.label, value: tag.id }
                          })}
                          options={availableTags.map((tag) => {
                            return { label: tag.label, value: tag.id }
                          })}
                          onChange={(tags) => {
                            setSelectedTags(
                                tags.map((tag) => {
                                  return { label: tag.label, id: tag.value }
                                })
                            )
                          }}
                          isMulti
                          className="border rounded"
                          styles={{ control: base => ({ ...base, borderColor: '#0d6efd' }) }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="markdown" className="mb-4">
                  <Form.Label className="text-secondary fw-semibold">Body</Form.Label>
                  {/*<Form.Control*/}
                  {/*    defaultValue={markdown}*/}
                  {/*    required*/}
                  {/*    as="textarea"*/}
                  {/*    ref={markdownRef}*/}
                  {/*    rows={15}*/}
                  {/*    placeholder="Enter your note content"*/}
                  {/*    className="border-primary"*/}
                  {/*/>*/}
                    <MDEditor
                        value={markdown}
                        onChange={(value) => setMarkdown(value as string)}
                        id="notes"
                        preview="edit"
                        height={300}
                        style={{ borderRadius: 20, overflow: "hidden" }}
                        previewOptions={{
                            disallowedElements: ["style"],
                        }}
                    />
                </Form.Group>
                <Stack direction="horizontal" gap={2} className="mt-3 justify-content-end">
                  <Button type="submit" variant="primary" className="px-4 me-2">
                    Save
                  </Button>
                  <Link to="..">
                    <Button type="button" variant="outline-danger">
                      Cancel
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Form>
          </Card.Body>
        </Card>
      </Container>
  )
}
