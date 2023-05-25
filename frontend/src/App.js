/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-25 13:07:51
 * @Description: description
 */


//import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import { Route, Routes } from 'react-router-dom';
import OurTeamPage from './components/OurTeamPage';
import CareersPage from './components/CareersPage';
import ClientsPage from './components/ClientsPage';
import ContactUsPage from './components/ContactUsPage';
import BecomeMemberPage from './components/BecomeMemberPage';
import { AGRICULTURE_LOAN_URL, AUTO_LOAN_URL, BECOME_PARTNER_URL, BUSINESS_CONSULTING_URL, BUSINESS_LOAN_URL, CAREERS_URL, CLIENTS_URL, CONTACT_US_URL, CORPORATE_FINANCE_URL, CORPORATE_TRUST_URL, CREDIT_CARD_URL, EDUCATION_LOAN_URL, FINANCIAL_ADVISOR_URL, GOLD_LOAN_URL, HOME_LOAN_URL, HOME_URL, INSURANCE_URL, INVESTMENT_CONSULTING_URL, MORTGAGE_LOAN_URL, NET_WORTH_URL, OUR_TEAM_URL, PERSONAL_LOAN_URL, PROPERTY_LOAN_URL, STOCKS_URL, TRADING_URL, WEALTH_URL } from './Constants_Personal_URLS';
import PersonalLoanPage from './components/PersonalLoanPage';
import BusinessLoanPage from './components/BusinessLoanPage';
import MortgageLoanPage from './components/MortgageLoanPage';
import HomeLoanPage from './components/HomeLoanPage';
import AutoLoanPage from './components/AutoLoanPage';
import InsurancePage from './components/InsurancePage';
import TradingPage from './components/TradingPage';
import CreditCardPage from './components/CreditCardPage';
import GoldLoanPage from './components/GoldLoanPage';
import AgricultureLoanPage from './components/AgricultureLoanPage';
import EducationLoanPage from './components/EducationLoanPage';
import PropertyLoanPage from './components/PropertyLoanPage';
import FinancialAdvisorPage from './components/FinancialAdvisorPage';
import BusinessConsultingPage from './components/BusinessConsultingPage';
import CorporateFinancePage from './components/CorporateFinancePage';
import CorporateTrustPage from './components/CorporateTrustPage';
import InvestmentConsultingPage from './components/InvestmentConsultingPage';
import NetWorthPage from './components/NetWorthPage';
import StocksAndBondsPage from './components/StocksAndBondsPage';
import WealthManagementPage from './components/WealthManagementPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path={HOME_URL} element={<FrontPage/>}/>
        <Route path={OUR_TEAM_URL} element={<OurTeamPage/>}/>
        <Route path={CAREERS_URL} element={<CareersPage/>}/>
        <Route path={CLIENTS_URL} element={<ClientsPage/>}/>
        <Route path={CONTACT_US_URL} element={<ContactUsPage/>}/>
        <Route path={BECOME_PARTNER_URL} element={<BecomeMemberPage/>}/>
        <Route path={PERSONAL_LOAN_URL} element={<PersonalLoanPage/>}/>
        <Route path={BUSINESS_LOAN_URL} element={<BusinessLoanPage/>}/>
        <Route path={MORTGAGE_LOAN_URL} element={<MortgageLoanPage/>}/>
        <Route path={HOME_LOAN_URL} element={<HomeLoanPage/>}/>
        <Route path={AUTO_LOAN_URL} element={<AutoLoanPage/>}/>
        <Route path={INSURANCE_URL} element={<InsurancePage/>}/>
        <Route path={TRADING_URL} element={<TradingPage/>}/>
        <Route path={CREDIT_CARD_URL} element={<CreditCardPage/>}/>
        <Route path={GOLD_LOAN_URL} element={<GoldLoanPage/>}/>
        <Route path={AGRICULTURE_LOAN_URL} element={<AgricultureLoanPage/>}/>
        <Route path={EDUCATION_LOAN_URL} element={<EducationLoanPage/>}/>
        <Route path={PROPERTY_LOAN_URL} element={<PropertyLoanPage/>}/>
        <Route path={FINANCIAL_ADVISOR_URL} element={<FinancialAdvisorPage/>}/>
        <Route path={BUSINESS_CONSULTING_URL} element={<BusinessConsultingPage/>}/>
        <Route path={CORPORATE_FINANCE_URL} element={<CorporateFinancePage/>}/>
        <Route path={CORPORATE_TRUST_URL} element={<CorporateTrustPage/>}/>
        <Route path={INVESTMENT_CONSULTING_URL} element={<InvestmentConsultingPage/>}/>
        <Route path={NET_WORTH_URL} element={<NetWorthPage/>}/>
        <Route path={STOCKS_URL} element={<StocksAndBondsPage/>}/>
        <Route path={WEALTH_URL} element={<WealthManagementPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
