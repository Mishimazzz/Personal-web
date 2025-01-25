import HtmlCssJsLayout from "./HtmlCssJslayout";

interface ProjectPageProps {
    params: { id: string }; 
}

const ProjectDetail = ({ params }: ProjectPageProps) => {
    const { id } = params;

    switch (id) {
        case "html-css-js":
            return <HtmlCssJsLayout />;
        case "c-cpp":
            // return <CCppLayout />;
        case "python":
            // return <PythonLayout />;
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
