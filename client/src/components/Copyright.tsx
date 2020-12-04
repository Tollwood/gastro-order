import Link from "@material-ui/core/Link/Link";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

const  Copyright:React.FC = () => {
    return (
      <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://gastro-order-dev.barmstedt.shop/">
          Gastro Order
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </footer>
    );
  }


  export default Copyright;