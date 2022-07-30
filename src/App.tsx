import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import profilePhoto from "./Assets/profile-photo-centered.jpg";
import styles from "./App.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.App}>
      <div className={styles.backgroundArrowLeft}></div>
      <div className={styles.backgroundArrowRight}></div>
      <header className={styles.App_header}>
        <Card className={styles.Card}>
          <CardMedia
            className={styles.Card_photo}
            component="img"
            image={profilePhoto}
            alt="profile picture"
          />
          <CardContent className={styles.Card_Content}>
            <div>
              <Typography
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                variant="subtitle1"
                component="div"
              >
                Julian David Mendoza Ruiz
              </Typography>
              <Typography
                sx={{ fontSize: "0.7rem" }}
                variant="caption"
                component="div"
              >
                Fullstack web and Game developer
              </Typography>
              <Typography
                sx={{ fontSize: "0.7rem" }}
                gutterBottom
                variant="caption"
                component="div"
              >
                julianmendozaruiz.website
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                className={styles.buttons_contact}
              >
                <Grid item xs={5}>
                  <Button
                    size="small"
                    className={styles.button_email}
                    variant="contained"
                    startIcon={<EmailIcon />}
                    onClick={() =>
                      openInNewTab("mailto:jdmendoza_90@hotmail.com")
                    }
                  >
                    Email
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    size="small"
                    className={styles.button_linkedin}
                    variant="contained"
                    onClick={() =>
                      openInNewTab(
                        "https://www.linkedin.com/in/julian-david-mendoza-ruiz-005102205/"
                      )
                    }
                    startIcon={<LinkedInIcon />}
                  >
                    LinkedIn
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Stack rowGap={0.5} sx={{ paddingBlock: "1rem" }}>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body1"
                className={styles.body1}
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "0.6rem" }}
                variant="caption"
                className={styles.body2}
              >
                I'm a systems engineer dedicated to software development. My
                current role is being a fullstack web and game developer. Always
                looking for new ways to create experiences with an impact with
                high quality of code and thoughtfull design.
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="body1"
                className={styles.body1}
              >
                Interests
              </Typography>
              <Typography
                sx={{ fontSize: "0.6rem" }}
                variant="caption"
                className={styles.body2}
              >
                I like games in general but particularly video games. I'm also
                open to studying pop-culture and languages. Big fan of anime,
                manga and japanese culture in general. I adore football, whether
                it is playing or watching, super fan of Arsenal FC.
              </Typography>
            </Stack>
          </CardContent>
          <CardActions className={styles.Actions}>
            <Grid
              container
              direction="row"
              columnSpacing={5}
              justifyContent="center"
            >
              <Grid item>
                <IconButton
                  size="large"
                  sx={{ padding: 0, color: "#848484" }}
                  aria-label="facebook button"
                  onClick={() =>
                    openInNewTab(
                      "https://www.facebook.com/juliandavid.mendozaruiz"
                    )
                  }
                >
                  <FacebookIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  sx={{ padding: 0, color: "#848484" }}
                  aria-label="instagram button"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/julian_meru/")
                  }
                >
                  <InstagramIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  sx={{ padding: 0, color: "#848484" }}
                  aria-label="github button"
                  onClick={() => openInNewTab("https://github.com/JDevMen")}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </header>
    </div>
  );
}

export default App;
