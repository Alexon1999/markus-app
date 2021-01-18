import Smartphone from "../../imgs/smartphone.png";
import Smartphone2 from "../../imgs/smartphone2.png";
import management from "../../imgs/management.svg";
import stocks from "../../imgs/stocks.svg";

const datas = [
  {
    titre: "Gérez vos stocks avec précision et anticipez votre activité",
    sousTitre:
      "MARKUS permet aux restaurateurs de gérer entièrement leurs stocks depuis l’application",
    details: [
      "Générez une liste de vos produits en stock",
      "Réceptionnez vos machandises",
      "Réalisez les fiches techniques de vos plats",
      "Mettez à jour vos produits en stock et réduisez vos écarts",
    ],
    image: Smartphone,
    style: {
      nom: "left",
      flexDirection: "row",
      marginRight: "1.5rem",
    },
    bgImage: {
      image: stocks,
      right: -40,
      height: "45%",
    },
  },
  {
    titre: "Optimisez le management de vos ressources humaines",
    sousTitre:
      "MARKUS vous assiste dans la gestion administrative de vos salariés ",
    details: [
      "Créez votre registre du personnel",
      "Rédigez vos contrats de travail et lettres types",
      "Facilitez vos tâches administratives",
      "Faites des économies au niveau de votre expert comptable",
    ],
    image: Smartphone2,
    style: {
      nom: "right",
      flexDirection: "row-reverse",
      textAlign: "right",
      alignItems: "flex-end",
      marginLeft: "1.5rem",
    },
    bgImage: {
      image: management,
      left: -60,
      height: "60%",
    },
  },
];

export default datas;
