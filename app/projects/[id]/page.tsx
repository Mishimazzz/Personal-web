// 'use client';
import HtmlCssJsLayout from "./HtmlCssJslayout";
import CandCPlus from "./CandCPlus";
import JavaLayout from "./JavaLayout";
import RLayout from "./RLayout";
import PythonLayout from "./PythonLayout";
import SQLLayout from "./SQLLayout";
import MISPOCAMLLayout from "./MISPOCAMLLayout";
import UnityLayout from "./UnityLayout";

interface ProjectPageProps {
    params: { id: string }; 
}

const ProjectDetail = async ({ params }: ProjectPageProps) => {
    const { id } = await params;

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
};

export default ProjectDetail;
