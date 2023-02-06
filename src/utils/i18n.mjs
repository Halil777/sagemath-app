import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      home: "Главная",
      about: "О Нас",
      contact: "Контакт",
      books: "Книги",
      titu: "Инженерно-технологический университет Туркменистана им. Огузхана",
      department: "Информационные Системы и Технологии",
      getConnect: "Присоединяйтесь к нам в социальных сетях",
      links: "Полезные Cсылки",
      what: "Что такое SageMath",
      sage1:
        "Первая версия SageMath была выпущена 24 февраля 2005 г. как бесплатное программное обеспечение с открытым исходным кодом в соответствии с условиями Стандартной общественной лицензии GNU версии 2 с первоначальными целями создания «альтернативы с открытым исходным кодом для Magma, Maple, Mathematica и MATLAB. '. Создатель и руководитель проекта SageMath Уильям Стейн был математиком из Вашингтонского университета. SageMath использует синтаксис, напоминающий синтаксис Python, поддерживая процедурные, функциональные и объектно-ориентированные конструкции.",
      sage: "SageMath (ранее Sage или SAGE, «Система для экспериментов с алгеброй и геометрией») представляет собой систему компьютерной алгебры (CAS) с функциями, охватывающими многие аспекты математики, включая алгебру, комбинаторику, теорию графов, численный анализ, теорию чисел, исчисление и статистику.",
    },
  },
  tm: {
    translation: {
      home: "Baş sahypa",
      about: "Biz Barada",
      contact: "Habarlaşmak",
      books: "Kitaplar",
      titu: "TÜRKMENISTANYŇ OGUZ HAN ADYNDAKY INŽENER-TEHNOLOGIÝALAR UNIWERSITETI",
      department: "maglumat ulgamlary we tehnologiýalary",
      getConnect: "Sosial ulgamlarda biziň bilen baglanyşyň",
      links: "Peýdaly Baglanyşyklar",
      what: "SageMath Näme",
      sage1:
        "SageMath-yň ilkinji wersiýasy 2005-nji ýylyň 24-nji fewralynda 'Magma, Maple, Mathematica' we 'MATLAB' -a açyk çeşme alternatiwasyny döretmek maksady bilen GNU General Public License 2 wersiýasynyň şertleri boýunça erkin we açyk programma üpjünçiligi hökmünde neşir edildi. '. SageMath taslamasynyň düýbüni tutujy we ýolbaşçysy William Stein Waşington uniwersitetinde matematikdi. SageMath, Python-a meňzeş sintaksis ulanýar, prosessual, funksional we obýekte gönükdirilen gurluşlary goldaýar.",
      sage: "SageMath (öň Sage ýa-da SAGE, 'Algebra we geometriýa synag ulgamy'), algebra, kombinatorika, grafik teoriýasy, san derňewi, san teoriýasy, hasaplama we statistika ýaly matematikanyň köp tarapyny öz içine alýan kompýuter algebra ulgamy (CAS).",
    },
  },

  en: {
    translation: {
      home: "Home",
      about: "About",
      contact: "Contact us",
      books: "Books",
      titu: "Oguz Han Engineering And Technology University .",
      department: "Department of Information Systems And Technologies",
      getConnect: "Get connected with us on social networks",
      links: "Useful Links",
      what: "What is SageMath",
      sage1:
        "The first version of SageMath was released on 24 February 2005 as free and open-source software under the terms of the GNU General Public License version 2, with the initial goals of creating an 'open source alternative to Magma, Maple, Mathematica, and MATLAB'. The originator and leader of the SageMath project, William Stein, was a mathematician at the University of Washington. SageMath uses a syntax resembling Python's, supporting procedural, functional and object-oriented constructs.",
      sage: 'SageMath (previously Sage or SAGE, "System for Algebra and Geometry Experimentation") is a computer algebra system (CAS) with features covering many aspects of mathematics, including algebra, combinatorics, graph theory, numerical analysis, number theory, calculus and statistics.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
