import React from "react";
function Project(props) {
    return (
        <div className="card" id="project">
            <div className="front">
                <img src={props.projectLogo} className="prjlogos" />
                <div className="stacks">
                    {props.stack}
                </div>
                <div className="prjN">
                    {props.title}
                </div>
                <div className="links">
                    <a href={props.website} target="_blank" ><div className="web">Website</div></a>
                    <a href={props.github} target="_blank"><div className="git">Github</div></a>
                </div>
            </div>

        </div>
    )
}
export default Project;