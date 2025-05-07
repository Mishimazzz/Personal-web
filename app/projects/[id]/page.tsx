// 'use client';
import HtmlCssJsLayout from "./HtmlCssJslayout";
import CandCPlus from "./CandCPlus";
import JavaLayout from "./JavaLayout";

interface ProjectPageProps {
    params: { id: string }; 
}

const ProjectDetail = ({ params }: ProjectPageProps) => {
    const { id } =  params;

    switch (id) {
        case "html-css-js":
            return <HtmlCssJsLayout />;
        case "c-cpp":
            return <CandCPlus />;
        case "R":
            // return <PythonLayout />;
        case "java":
            return <JavaLayout />;
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
