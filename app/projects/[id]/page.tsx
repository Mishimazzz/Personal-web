// app/projects/[id]/page.tsx

import HtmlCssJsLayout from "./HtmlCssJslayout";
import CandCPlus from "./CandCPlus";
import JavaLayout from "./JavaLayout";
import RLayout from "./RLayout";
import PythonLayout from "./PythonLayout";
import SQLLayout from "./SQLLayout"; // Update the path to the correct location of SQLLayout
import MISPOCAMLLayout from "./MISPOCAMLLayout";
import UnityLayout from "./UnityLayout";

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    switch (id) {
        case "html-css-js":
            return <HtmlCssJsLayout />;
        case "c-cpp":
            return <CandCPlus />;
        case "r":
            return <RLayout />;
        case "java":
            return <JavaLayout />;
        case "python":
            return <PythonLayout />;
        case "sql":
            return <SQLLayout />;
        case "misp-ocaml":
            return <MISPOCAMLLayout />;
        case "unity-csharp":
            return <UnityLayout />;
        default:
            return (
                <div>
                    <h1>Project Not Found</h1>
                    <p>The project you are looking for does not exist.</p>
                </div>
            );
    }
}