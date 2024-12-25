import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type PDFDocumentProps = {
    markdown: string;
};

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Helvetica",
    },
    markdownText: {
        fontSize: 12,
        lineHeight: 1.5,
    },
});

const PDFDocument = ({ markdown }: PDFDocumentProps) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.markdownText}>
                            {markdown}
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
