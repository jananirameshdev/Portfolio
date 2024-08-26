import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
function Box() {
    return (
        <BrowserRouter>
            <div className="box">
                <img src="https://i.ibb.co/8j9gY0S/image.png" alt="person" className="per_img" />
                <div className="name">
                    I'm <span className="text_color">Janani Ramesh</span>
                    <div className="det">
                        Passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React, crafting seamless and engaging user experiences.
                    </div>
                    <div className="btns">
                        <Link to='#project'><button className="prj">Projects</button></Link>
                        <a href="https://drive.google.com/file/d/1j0jJlfAuc-ymCnJr8vs4ZGuo3KQFom4p/view?usp=drivesdk" target="_blank" ><button className="res">Download Resume</button></a>
                    </div>
                </div>
            </div>
            <div className="skill">
                <div className="skill1">
                    <img src="https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg" alt="htmllogo" className="skillLogo" /> Html
                </div>
                <div className="skill2">
                    <img src="https://i.pinimg.com/564x/b7/c2/e5/b7c2e508920a1168b94dea8675fa311d.jpg" alt="csslogo" className="skillLogo" /> Css
                </div>
                <div className="skill3">
                    <img src="https://i.pinimg.com/564x/96/e6/8d/96e68d712f51757ac07cfe22354d8be8.jpg" alt="jslogo" className="skillLogo" /> JavaScript
                </div>
                <div className="skill4">
                    <img src="https://i.pinimg.com/564x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg" alt="reactlogo" className="skillLogo" /> React
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Box;