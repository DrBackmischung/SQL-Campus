import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
            title_home: "Home",
            title_about: "About us",
            title_admin: "Admin-Dashboard",
            title_course: "Course",
            title_courses: "Courses",
            title_login: "Login",
            title_profile: "Profile",
            title_scoreboard: "Scoreboard",
            title_task: "Task",
            title_tasks: "Tassk",
            title_video: "Video",
            title_videos: "Videos",
            temporary_title: "Hi there, welcome to sql-campus.de! 🎉",
            temporary_home: "This site is currently in development. We are sorry for the inconvinience, please check again later 🫶🏼",
            temporary_mail: "For further questions, please contact info@sql-campus.de ✉️"
        }
      },
      de: {
        translation: {
            title_home: "Home",
            title_about: "Über uns",
            title_admin: "Admin-Seite",
            title_course: "Kurs",
            title_courses: "Kurse",
            title_login: "Login",
            title_profile: "Profil",
            title_scoreboard: "Bestenliste",
            title_task: "Aufgabe",
            title_tasks: "Aufgaben",
            title_video: "Video",
            title_videos: "Videos",
            temporary_title: "Hi, willkommen auf sql-campus.de! 🎉",
            temporary_home: "Diese Seite wird gerade entwickelt. Wir bitten um Verständnix, komm später wieder 🫶🏼",
            temporary_mail: "Bei Fragen, wende dich an info@sql-campus.de ✉️"
        }
      }
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;