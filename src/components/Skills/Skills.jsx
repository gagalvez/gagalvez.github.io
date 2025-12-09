import React from "react";
import { skillsData } from "./Skills.logic";
import { styles } from "./Skills.styles";

const Skills = () => {
  const LanguagesIcon = skillsData.languages.icon;

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header.container}>
        <h2 className={styles.header.title}>
          Habilidades <span className="text-accent">Técnicas</span>
        </h2>
        <p className={styles.header.subtitle}>
          Conjunto de tecnologías y metodologías que aplico en el desarrollo de
          soluciones digitales.
        </p>
      </div>

      <div className={styles.categoriesGrid}>
        {skillsData.categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.title}
              className={styles.categoryCard.container}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={styles.categoryCard.header}>
                <div className={styles.categoryCard.iconWrapper}>
                  <IconComponent className={styles.categoryCard.icon} />
                </div>
                <h3 className={styles.categoryCard.title}>{category.title}</h3>
              </div>

              <ul className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <li key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Idiomas */}
      <div className={styles.languages.container}>
        <div className={styles.languages.card}>
          <div className={styles.languages.header}>
            <div className={styles.languages.iconWrapper}>
              <LanguagesIcon className={styles.languages.icon} />
            </div>
            <h3 className={styles.languages.title}>Idiomas</h3>
          </div>
          <div className={styles.languages.content}>
            {skillsData.languages.items.map((lang) => (
              <span key={lang} className={styles.languages.item}>{lang}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Herramientas adicionales */}
      <div className={styles.tools.container}>
        <h3 className={styles.tools.title}>
          Herramientas & Tecnologías
        </h3>
        <div className={styles.tools.grid}>
          {skillsData.tools.map((tool) => (
            <div key={tool} className={styles.tools.item}>
              <span className={styles.tools.text}>{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
