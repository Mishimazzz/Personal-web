import "./page.css";
import SiderBar from "../../Sidebar";

const HtmlCssJslayout = () => {
    return (
        <div className="page">
          <div className="left-section">
            <SiderBar />
          </div>
          <div className="right-section">
            <div className="content">
                <h2>Noted: </h2>
                <p>
                        <span className="tab"></span>University code work is provided as a <strong>PDF</strong> because I cannot share the actual code due to university policy. 
                        Instead, I will briefly explain what I have done in the project.<br></br>
                        <span className="tab"></span>Other code work is linked to my <strong>GitHub</strong>, where you can freely check it out and download it!
                </p>

                <h3> Full-stack projects: </h3>
                <ul>
                    <li>
                            <a href="/pdf/McJam Web dev pdf.pdf" target="_blank" rel="noopener noreferrer"> McJam Web dev HTML+CSS+JS+React+MongoDB PDF</a>
                    </li>
                </ul>

                <h3> Front-end projects: </h3>
                <ul>
                    <li>
                            <a href="/pdf/HomeTown html+css .pdf" target="_blank" rel="noopener noreferrer"> HomeTown HTML+CSS PDF</a>
                    </li>
                    <li>
                            <a href="/pdf/MWIFI web HTML+CSS+JS.pdf" target="_blank" rel="noopener noreferrer"> MWIFI web HTML+CSS+JS PDF</a>
                    </li>
                    <li>
                            <a href="/pdf/Youtube intro web HTML+CSS+JS.pdf" target="_blank" rel="noopener noreferrer"> Youtube intro web HTML+CSS+JS PDF</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      );
};

export default HtmlCssJslayout;