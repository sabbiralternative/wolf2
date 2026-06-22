/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLanguage } from "../../../context/LanguageProvider";
import { useGetLanguage } from "../../../hooks/language";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const Language = ({ setShowLanguage }) => {
  const { setLanguage } = useLanguage();
  const { data } = useGetLanguage();

  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    setShowLanguage(false);
  });

  const languages = data?.CRICKET;

  const handleSetLanguage = (language) => {
    localStorage.setItem("language", language);
    setShowLanguage(false);
    setLanguage(language);
  };

  return (
    <div
      style={{
        width: "calc(100% - 30px)",
        minHeight: "100px",
        maxWidth: "200px",
        position: "absolute",
        marginBottom: "10px",
        top: "0px",
        right: "0",
        zIndex: "99999",
      }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        style={{
          width: "calc(100% - 30px)",
          minHeight: "100px",
          maxWidth: "200px",
          position: "absolute",
          marginBottom: "10px",
          top: "58px",
          right: "0",
          zIndex: "99999",
          boxShadow: "3px 3px 3px 3px rgb(0 0 0 / 0.05)",
        }}
        ref={loginRef}
      >
        <div
          style={{
            paddingBottom: "20px",
            background: "#fff",
          }}
        >
          <form>
            <div style={{ padding: "5px 10px" }}>
              <h1
                style={{
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "11px",
                }}
              >
                <MdKeyboardArrowRight /> <span>Select Language</span>
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: "100%",
                  gap: "1px",
                  marginTop: "0px",
                  fontSize: "11px",
                }}
              >
                {languages &&
                  Object.keys(languages)?.map((language, idx) => {
                    return (
                      <button
                        onClick={() => handleSetLanguage(language)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          border: "none",
                          background: "transparent",
                          textTransform: "capitalize",
                          paddingLeft: "0px",
                          color: "var(--highlight-color)",
                          cursor: "pointer",
                          paddingBottom: "4px",
                        }}
                        key={idx}
                      >
                        <MdKeyboardArrowRight />
                        <span>{language}</span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Language;
