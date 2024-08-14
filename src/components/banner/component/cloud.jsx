import React from "react";
import Box from "@mui/material/Box";
import styles from "./cloud.module.css";

const Cloud = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <div className={styles.cloud2}></div>;<div className={styles.cloud}></div>
      ;<div className={styles.cloud1}></div>;
      <div className={styles.cloud}></div>;<div className={styles.cloud1}></div>
      ;<div className={styles.cloud2}></div>;
    </Box>
  );
};

export default Cloud;
