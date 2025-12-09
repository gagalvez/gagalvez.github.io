import React from "react";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { contactData, useCopyToClipboard } from "./Contact.logic";
import { styles } from "./Contact.styles";

const Contact = () => {
  const { copiedField, copyToClipboard } = useCopyToClipboard();

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.header.container}>
        <h2 className={styles.header.title}>
          Información de <span className="text-accent">Contacto</span>
        </h2>
        <p className={styles.header.subtitle}>
          ¿Quieres contactarme? Aquí está mi información.
        </p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card.container}>
          <h3 className={styles.card.title}>Información</h3>

          <div className={styles.contactList}>
            {/* Email */}
            <div className={styles.contactItem.container}>
              <div className={styles.contactItem.iconWrapper}>
                <Mail className={styles.contactItem.icon} />
              </div>
              <div className={styles.contactItem.details}>
                <p className={styles.contactItem.label}>Email</p>
                <p className={styles.contactItem.value}>
                  {contactData.email}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(contactData.email, "email")}
                className={styles.copyButton.base}
                aria-label="Copiar email"
              >
                {copiedField === "email" ? (
                  <Check className={styles.copyButton.iconCopied} />
                ) : (
                  <Copy className={styles.copyButton.icon} />
                )}
              </button>
            </div>

            {/* Teléfono */}
            <div className={styles.contactItem.container}>
              <div className={styles.contactItem.iconWrapper}>
                <Phone className={styles.contactItem.icon} />
              </div>
              <div className={styles.contactItem.details}>
                <p className={styles.contactItem.label}>Teléfono</p>
                <p className={styles.contactItem.value}>{contactData.phone}</p>
              </div>
              <button
                onClick={() => copyToClipboard(contactData.phone, "phone")}
                className={styles.copyButton.base}
                aria-label="Copiar teléfono"
              >
                {copiedField === "phone" ? (
                  <Check className={styles.copyButton.iconCopied} />
                ) : (
                  <Copy className={styles.copyButton.icon} />
                )}
              </button>
            </div>

            {/* Ubicación */}
            <div className={styles.contactItem.container}>
              <div className={styles.contactItem.iconWrapper}>
                <MapPin className={styles.contactItem.icon} />
              </div>
              <div className={styles.contactItem.details}>
                <p className={styles.contactItem.label}>Ubicación</p>
                <p className={styles.contactItem.value}>
                  {contactData.locationFull}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(contactData.location, "location")}
                className={styles.copyButton.base}
                aria-label="Copiar ubicación"
              >
                {copiedField === "location" ? (
                  <Check className={styles.copyButton.iconCopied} />
                ) : (
                  <Copy className={styles.copyButton.icon} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
