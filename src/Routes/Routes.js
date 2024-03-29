import CSRgenerator from "../Components/CSR/CSRgenerator";
import CSRdecoder from "../Components/CSR/CSRdecoder";
import Certificates from "../Components/Certificates/Certificates";
import Company from "../Components/Company/Company";
import Lei from "../Components/Lei/Lei";
import Reseller from "../Components/Reseller/Reseller";
import Solutions from "../Components/Solutions/Solutions";
import Support from "../Components/Support/Support";
import Trustly from "../Components/Trustly/Trustly";
import TrustlyScaner from "../Components/Trustly/TrustlyScaner";
import SSLchecker from "../Components/CSR/SSLchecker";
import SSLmatcher from "../Components/CSR/SSLmatcher";
import Wiki from "../Components/Wiki/Wiki";
import Terms from "../Components/Terms&Conditions/Terms";
import Payment from "../Components/Payment/Payment";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import General from "../Components/Wiki/GeneralQuestion/General";
import SslValidation from "../Components/Wiki/SslValidation/SslValidation";
import Problems_Issues from "../Components/Wiki/Problems&Issues/Problems_Issues";
import Intermediate from "../Components/Wiki/IntermediateCertificate/Intermediate";
import Reissue from "../Components/Wiki/Reissue/Reissue";
import Basic from "../Components/Wiki/BasicFaq/Basic";
import CsrGeneration from "../Components/Wiki/CSR/CsrGeneration";
import Installitions from "../Components/Wiki/Installitions/Installitions";
import OrderCancelation from "../Components/Wiki/GeneralQuestion/OrderCancelation";
import MothlyBilling from "../Components/Wiki/GeneralQuestion/MothlyBilling";
import DisAllowedDomian from "../Components/Wiki/GeneralQuestion/DisAllowedDomian";
import TaxVat from "../Components/Wiki/GeneralQuestion/TaxVat";
import ComodoSectigo from "../Components/Wiki/GeneralQuestion/ComodoSectigo";
import MultiYearSsl from "../Components/Wiki/GeneralQuestion/MultiYearSsl";
import MDF from "../Components/Wiki/GeneralQuestion/MDF";
import CodeSigning from "../Components/Wiki/GeneralQuestion/CodeSigning";
import OrderStuck from "../Components/Wiki/SslValidation/OrderStuck";
import DomianValidation from "../Components/Wiki/SslValidation/DomianValidation";
import Digicert from "../Components/Products/Digicert/Digicert";
import Detail from "../Components/Products/Digicert/Detail";
import GeoTrust from "../Components/Products/GeoTrust/GeoTrust";
import GoGetSSL from "../Components/Products/GoGetSSL/GoGetSSL";
import Sectigo from "../Components/Products/Sectigo/Sectigo";
import RapidSSL from "../Components/Products/RapidSSL/RapidSSL";
import Thawte from "../Components/Products/Thawte/Thawte";
import DVSSL from "../Components/Products/DV-SSL/DVSSL";
import OVSSL from "../Components/Products/OV-SSL/OVSSL";
import EVSSL from "../Components/Products/EV-SSL/EVSSL";
import MDSSL from "../Components/Products/Multi-Domian/MDSSL";
import WSSL from "../Components/Products/Wildcard-SSL/WSSL";
import BusinessValidation from "../Components/Wiki/SslValidation/BusinessValidation";
import ExtendedValidation from "../Components/Wiki/SslValidation/ExtendedValidation";
import ReportPrice from "../Components/ReportPrice/ReportPrice";
import SectigoDcv from "../Components/Wiki/SslValidation/SectigoDcv";
import CaaRecord from "../Components/Wiki/Problems&Issues/CaaRecord";
import FixModules from "../Components/Wiki/Problems&Issues/FixModules";
import ErrCert from "../Components/Wiki/Problems&Issues/ErrCert";
import ErrSsl from "../Components/Wiki/Problems&Issues/ErrSsl";
import ErrProtocol from "../Components/Wiki/Problems&Issues/ErrProtocol";
import ErrPinnedKey from "../Components/Wiki/Problems&Issues/ErrPinnedKey";
import ErrErxRecord from "../Components/Wiki/Problems&Issues/ErrErxRecord";
import ErrTransparancy from "../Components/Wiki/Problems&Issues/ErrTransparancy";
import ErrDateInvalid from "../Components/Wiki/Problems&Issues/ErrDateInvalid";
import SecError from "../Components/Wiki/Problems&Issues/SecError";
import ErrUnknown from "../Components/Wiki/Problems&Issues/ErrUnknown";
import WindowDoesNot from "../Components/Wiki/Problems&Issues/WindowDoesNot";
import LostPrivateKey from "../Components/Wiki/Problems&Issues/LostPrivateKey";
import CommonName from "../Components/Wiki/Problems&Issues/CommonName";
import NoPadlock from "../Components/Wiki/Problems&Issues/NoPadlock";
import Sitemap from "../Components/Sitemap/Sitemap";
import NotFound from "../Components/404Page/NotFound";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/ssl-certificates`, Component: <Certificates /> },
  { path: `${process.env.PUBLIC_URL}/reseller-program`, Component: <Reseller /> },
  { path: `${process.env.PUBLIC_URL}/lei`, Component: < Lei /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust`, Component: < Trustly /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust-scanner`, Component: <TrustlyScaner /> },
  { path: `${process.env.PUBLIC_URL}/solutions`, Component: <Solutions /> },
  { path: `${process.env.PUBLIC_URL}/support`, Component: <Support /> },
  { path: `${process.env.PUBLIC_URL}/company`, Component: <Company /> },
  { path: `${process.env.PUBLIC_URL}/report-better-price`, Component: <ReportPrice /> },
  { path: `${process.env.PUBLIC_URL}/online-csr-generator`, Component: <CSRgenerator /> },
  { path: `${process.env.PUBLIC_URL}/online-csr-decoder`, Component: <CSRdecoder /> },
  { path: `${process.env.PUBLIC_URL}/check-ssl-installation`, Component: <SSLchecker /> },
  { path: `${process.env.PUBLIC_URL}/ssl-certificate-matcher-tool`, Component: <SSLmatcher /> },
  { path: `${process.env.PUBLIC_URL}/wiki`, Component: <Wiki /> },
  { path: `${process.env.PUBLIC_URL}/terms-and-conditions`, Component: <Terms /> },
  { path: `${process.env.PUBLIC_URL}/refund-policy`, Component: <Payment /> },
  { path: `${process.env.PUBLIC_URL}/privacy-policy`, Component: <PrivacyPolicy /> },
  { path: `${process.env.PUBLIC_URL}/sitemap`, Component: <Sitemap /> },
  { path: `${process.env.PUBLIC_URL}/404/`, Component: <NotFound /> },

  { path: `${process.env.PUBLIC_URL}/wiki/general`, Component: <General /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation`, Component: <SslValidation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems`, Component: <Problems_Issues /> },
  { path: `${process.env.PUBLIC_URL}/wiki/intermediate-certificates`, Component: <Intermediate /> },
  { path: `${process.env.PUBLIC_URL}/wiki/ssl-reissue-renewal`, Component: <Reissue /> },
  { path: `${process.env.PUBLIC_URL}/wiki/ssl-basics`, Component: <Basic /> },
  { path: `${process.env.PUBLIC_URL}/wiki/csr-generation`, Component: <CsrGeneration /> },
  { path: `${process.env.PUBLIC_URL}/wiki/installation`, Component: <Installitions /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/order-cancellation-and-refund-rules`, Component: <OrderCancelation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/monthly-billing`, Component: <MothlyBilling /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/disalowed-domains`, Component: <DisAllowedDomian /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/tax-vat-rules`, Component: <TaxVat /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/comodo-is-now-sectigo`, Component: <ComodoSectigo /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/multi-year-subscription-ssl`, Component: <MultiYearSsl /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/mdf`, Component: <MDF /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/code-signing-2023`, Component: <CodeSigning /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/order-stuck-for-manual-check-brand-validation`, Component: <OrderStuck /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/domain-validation-ssl-verification`, Component: <DomianValidation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/business-validation-ssl-verification`, Component: <BusinessValidation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/extended-validation-ssl-verification`, Component: <ExtendedValidation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/sectigo-dcv-methods`, Component: <SectigoDcv /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/caa-record`, Component: <CaaRecord /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/how-to-fix-modulus-missmatch-error`, Component: <FixModules /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_cert_common_name_invalid`, Component: <ErrCert /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_ssl_version_or_cipher_mismatch`, Component: <ErrSsl /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_ssl_protocol_error`, Component: <ErrProtocol /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_ssl_pinned_key_not_in_cert_chain`, Component: <ErrPinnedKey /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/ssl_error_rx_record_too_long`, Component: <ErrErxRecord /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_certificate_transparency_required`, Component: <ErrTransparancy /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/err_cert_date_invalid`, Component: <ErrDateInvalid /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/sec_error_expired_certificate`, Component: <SecError /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/sec_error_unknown_issuer`, Component: <ErrUnknown /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/windows-does-not-have-enough-information-to-verify-certificate`, Component: <WindowDoesNot /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/lost-private-key`, Component: <LostPrivateKey /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/common-name-missmatch-error`, Component: <CommonName /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems/why-no-padlock`, Component: <NoPadlock /> },

  { path: `${process.env.PUBLIC_URL}/product/:id`, Component: <Detail /> },
  { path: `${process.env.PUBLIC_URL}/digicert`, Component: <Digicert /> },
  { path: `${process.env.PUBLIC_URL}/geotrust`, Component: <GeoTrust /> },
  { path: `${process.env.PUBLIC_URL}/ssl-certs`, Component: <GoGetSSL /> },
  { path: `${process.env.PUBLIC_URL}/sectigo`, Component: <Sectigo /> },
  { path: `${process.env.PUBLIC_URL}/rapidssl`, Component: <RapidSSL /> },
  { path: `${process.env.PUBLIC_URL}/thawte`, Component: <Thawte /> },
  { path: `${process.env.PUBLIC_URL}/dv-ssl`, Component: <DVSSL /> },
  { path: `${process.env.PUBLIC_URL}/ov-ssl`, Component: <OVSSL /> },
  { path: `${process.env.PUBLIC_URL}/ev-ssl`, Component: <EVSSL /> },
  { path: `${process.env.PUBLIC_URL}/multi-domian-ssl`, Component: <MDSSL /> },
  { path: `${process.env.PUBLIC_URL}/wildcard-ssl`, Component: <WSSL /> },

]