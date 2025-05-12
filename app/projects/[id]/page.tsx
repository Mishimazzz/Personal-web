import React from "react";

import HtmlCssJsLayout from "./HtmlCssJslayout";
import CandCPlus from "./CandCPlus";
import JavaLayout from "./JavaLayout";
import RLayout from "./RLayout";
import PythonLayout from "./PythonLayout";
import SQLLayout from "./SQLLayout";
import MISPOCAMLLayout from "./MISPOCAMLLayout";
import UnityLayout from "./UnityLayout";

type Props = {
    params: {
        id: string;
    };
};

const Page: React.FC<Props> = ({ params }) => {
    const { id } = params;

    switch (id) {
        case "html-css-js":
            return <HtmlCssJsLayout />;
        case "c-cpp":
            return <CandCPlus />;
        case "java":
            return <JavaLayout />;
        case "r":
            return <RLayout />;
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
                    <p>No such project: {id}</p>
                </div>
            );
    }
};

export default Page;