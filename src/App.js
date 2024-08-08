import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Doc from "./Component/Documetation/Doc";
import Error from "./Component/Error";
import InternPage from "./Component/Documetation/Internship/InternPage";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Blog from "./Component/Documetation/Blog";
import Licensing from "./Component/Licensing";
import CodeOfConduct from "./Component/Codeofconduct";
import Contributors from "./Component/Contributors";
import FeedbackButton from "./Component/Feedbtn";
import FeedbackModal from "./Component/Feedback";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import TermsAndConditions from "./Component/Terms";
import Newsletter from "./Component/Newsletter";

function App() {
  return (

      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Doc />} />
          <Route path="/intern" element={<InternPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/feedback" element={<FeedbackModal />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="*" element={<Error />} />
          <Route path="/licensing" element={<Licensing/>}/>
          <Route path="/codeofconduct" element={<CodeOfConduct/>}/>
        </Routes>
        <Newsletter/>
        <Footer />
      </div>

  );
}

export default App;
