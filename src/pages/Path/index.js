import "./style.css";
import lessons from "../../assets/lessons.json";

export const Path = () => {
  return (
    <div className="path-container">
      {lessons.map((lesson, i) => (
        <div key={i} className="path-lesson">
          <h3 className="path-title">{lesson.title}</h3>
          <iframe
            className="path-video"
            title={lesson.title}
            width="100%"
            height="380"
            src={lesson.urlYoutube}
            frameBorder="0"
            allowFullScreen
            ng-show="showvideo"
          />
          <p className="path-description">{lesson.description}</p>
          <div className="path-footer">
            <a className="path-aux" href={lesson.urlAux}>
              Baixar código da aula
            </a>
          </div>
        </div>
      ))}
      <div className="path-lessons-footer">
        <p
          className="path-description"
          style={{ textAlign: "center", fontWeight: "600" }}
        >
          PARABÉNS! Você chegou ao fim dessa jornada incrível e repleta de
          aprendizados, espero que esses vídeos tenham te ajudado e despertado
          em você a curiosade pelo mundo de tecnologia.
          <br /> Te vejo novamente em breve &#128522;
        </p>
        <a href="#" style={{ fontWeight: "600" }}>
          Avalie o projeto atráves desse formulário! Seu feedback ajudará muito
        </a>
      </div>
    </div>
  );
};
