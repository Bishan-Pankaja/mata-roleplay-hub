
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// Define rule categories in both languages
const ruleCategories = {
  en: [
    {
      title: "General Rules",
      rules: [
        "Be respectful to all players and staff members.",
        "No harassment, hate speech, discrimination, or bullying.",
        "No spamming in chat or using excessive caps.",
        "No advertising other servers or websites.",
        "Follow staff instructions at all times.",
        "No exploiting bugs or glitches - report them to staff.",
        "No use of hacks, mods, or third-party software that gives unfair advantages.",
        "Keep discussions in the appropriate channels.",
        "No inappropriate or offensive content, including usernames and profile pictures.",
        "English is the primary language in global chat."
      ]
    },
    {
      title: "Roleplay Guidelines",
      rules: [
        "Stay in character at all times when in roleplay areas.",
        "No random death match (RDM) - don't kill players without a valid roleplay reason.",
        "No vehicle death match (VDM) - don't use vehicles as weapons without roleplay context.",
        "No combat logging (disconnecting during roleplay/combat situations).",
        "No metagaming (using out-of-character information in roleplay).",
        "No powergaming (forcing actions on others or doing impossible things).",
        "Respect others' roleplay and don't intentionally disrupt it.",
        "Use appropriate communication channels for in-character and out-of-character chat.",
        "Follow realistic roleplay scenarios - no superhuman abilities.",
        "No breaking character in roleplay areas."
      ]
    },
    {
      title: "Character & Property Rules",
      rules: [
        "Each player is allowed up to 3 characters.",
        "Characters must have realistic names appropriate for the setting.",
        "Keep your property secure and lock vehicles when not in use.",
        "Don't abandon vehicles in high-traffic areas.",
        "No trespassing on private property without roleplay reason.",
        "Report any property bugs or issues to staff.",
        "Characters should have distinct identities and backgrounds.",
        "No sharing accounts or characters between players.",
        "Respect the boundaries of other players' properties.",
        "All character actions should align with their established background and personality."
      ]
    },
    {
      title: "Criminal Activity Rules",
      rules: [
        "All criminal activities must have proper roleplay context.",
        "No random robberies or muggings without setup.",
        "Give victims a chance to roleplay during criminal activities.",
        "No excessive violence without proper escalation.",
        "Respect the outcomes of criminal roleplay.",
        "Bank/store robberies must follow server-specific guidelines.",
        "Gang territories must be respected by all players.",
        "Criminal organizations must have established structure and hierarchy.",
        "Illegal business operations must maintain secrecy through roleplay.",
        "Hostage situations must follow specific guidelines (time limits, negotiations, etc.)."
      ]
    },
    {
      title: "Law Enforcement Rules",
      rules: [
        "Law enforcement characters must follow proper procedures.",
        "Abuse of police powers will result in disciplinary action.",
        "Police must have probable cause for searches and arrests.",
        "Maintain professional conduct even when dealing with difficult situations.",
        "Follow the proper chain of command within departments.",
        "Complete required training before active duty.",
        "Use appropriate force based on the situation.",
        "Document all significant police actions and arrests.",
        "Respond to emergency calls in a timely manner.",
        "Wear appropriate uniform and equipment for your department and role."
      ]
    }
  ],
  si: [
    {
      title: "සාමාන්‍ය නීති",
      rules: [
        "සියලුම ක්‍රීඩකයින් හා කාර්ය මණ්ඩලයට ගෞරවනීය වන්න.",
        "හිරිහැර කිරීම, වෛරී කථා, වෙනස්කම් කිරීම හෝ බිය ගැන්වීම නොකරන්න.",
        "චැට් හි ස්පෑම් නොකරන්න හෝ අධික කැපිටල් අකුරු භාවිතා නොකරන්න.",
        "වෙනත් සේවාදායකයන් හෝ වෙබ් අඩවි ප්‍රචාරණය නොකරන්න.",
        "සෑම විටම කාර්ය මණ්ඩල උපදෙස් අනුගමනය කරන්න.",
        "දෝෂ හෝ ගැටලු සූරාකෑම නොකරන්න - ඒවා කාර්ය මණ්ඩලයට වාර්තා කරන්න.",
        "අසාධාරණ වාසි ලබා දෙන හැක්ස්, මොඩ් හෝ තෙවන පාර්ශ්වීය මෘදුකාංග භාවිතා නොකරන්න.",
        "සාකච්ඡා සුදුසු නාලිකාවල තබා ගන්න.",
        "පරිශීලක නාම හා පැතිකඩ රූප ඇතුළුව නුසුදුසු හෝ අපහාසාත්මක අන්තර්ගතයන් නොතිබිය යුතුය.",
        "ගෝලීය චැට් හි ප්‍රධාන භාෂාව ඉංග්‍රීසි වේ."
      ]
    },
    {
      title: "රෝල්ප්ලේ මාර්ගෝපදේශ",
      rules: [
        "රෝල්ප්ලේ ප්‍රදේශවල සිටින විට සෑම විටම චරිතය තුළ රැඳී සිටින්න.",
        "අහඹු මරණ තරගය (RDM) නොකරන්න - වලංගු රෝල්ප්ලේ හේතුවකින් තොරව ක්‍රීඩකයින් නොමරන්න.",
        "වාහන මරණ තරගය (VDM) නොකරන්න - රෝල්ප්ලේ සන්දර්භයකින් තොරව වාහන ආයුධ ලෙස භාවිතා නොකරන්න.",
        "සටන් පිටවීම් නොකරන්න (රෝල්ප්ලේ/සටන් තත්ත්ව අතරතුර විසන්ධි වීම).",
        "මෙටාගේමින් නොකරන්න (රෝල්ප්ලේ තුළ චරිතයෙන් පිටත තොරතුරු භාවිතා කිරීම).",
        "පවර්ගේමින් නොකරන්න (අන් අය මත ක්‍රියා බලෙන් පැටවීම හෝ කළ නොහැකි දේ කිරීම).",
        "අන් අයගේ රෝල්ප්ලේ වලට ගරු කරන්න, සහ ඒවා හිතාමතා අවුල් නොකරන්න.",
        "චරිතය තුළ හා චරිතයෙන් පිටත සන්නිවේදනය සඳහා සුදුසු සන්නිවේදන නාලිකා භාවිතා කරන්න.",
        "යථාර්ථවාදී රෝල්ප්ලේ අවස්ථා අනුගමනය කරන්න - අධිමානව හැකියාවන් නොමැත.",
        "රෝල්ප්ලේ ප්‍රදේශවල චරිතය කඩ නොකරන්න."
      ]
    },
    {
      title: "චරිත සහ දේපල නීති",
      rules: [
        "සෑම ක්‍රීඩකයෙකුටම චරිත 3ක් දක්වා අවසර ඇත.",
        "චරිතවලට පරිසරයට ගැලපෙන යථාර්ථවාදී නම් තිබිය යුතුය.",
        "ඔබේ දේපල ආරක්ෂිතව තබා ගන්න සහ භාවිතා නොකරන විට වාහන අගුලු දමන්න.",
        "අධික වාහන තදබදය ඇති ප්‍රදේශවල වාහන අත්හැර නොයන්න.",
        "රෝල්ප්ලේ හේතුවකින් තොරව පෞද්ගලික දේපලවලට ඇතුළු නොවන්න.",
        "ඕනෑම දේපල දෝෂ හෝ ගැටලු කාර්ය මණ්ඩලයට වාර්තා කරන්න.",
        "චරිතවලට වෙනස් අනන්‍යතා සහ පසුබිම් තිබිය යුතුය.",
        "ක්‍රීඩකයින් අතර ගිණුම් හෝ චරිත බෙදා ගැනීම නොකරන්න.",
        "අනෙකුත් ක්‍රීඩකයින්ගේ දේපල සීමාවන්ට ගරු කරන්න.",
        "සියලුම චරිත ක්‍රියාකාරකම් ඔවුන්ගේ ස්ථාපිත පසුබිම සහ පෞරුෂත්වයට අනුකූල විය යුතුය."
      ]
    },
    {
      title: "අපරාධ ක්‍රියාකාරකම් නීති",
      rules: [
        "සියලුම අපරාධ ක්‍රියාකාරකම්වලට නිසි රෝල්ප්ලේ සන්දර්භයක් තිබිය යුතුය.",
        "පූර්ව සැලසුමකින් තොරව අහඹු කොල්ලකෑම් හෝ මං පැහැරීම් නොකරන්න.",
        "අපරාධ ක්‍රියාකාරකම් අතරතුර විඳින්නන්ට රෝල්ප්ලේ කිරීමට අවස්ථාවක් ලබා දෙන්න.",
        "නිසි ඉහළ නැංවීමකින් තොරව අධික ප්‍රචණ්ඩත්වය නොකරන්න.",
        "අපරාධ රෝල්ප්ලේ ප්‍රතිඵලවලට ගරු කරන්න.",
        "බැංකු/වෙළඳසැල් කොල්ලකෑම් සේවාදායක-විශේෂිත මාර්ගෝපදේශ අනුගමනය කළ යුතුය.",
        "කල්ලි ප්‍රදේශවලට සියලුම ක්‍රීඩකයින් ගරු කළ යුතුය.",
        "අපරාධ සංවිධානවලට ස්ථාපිත ව්‍යුහයක් සහ ධූරාවලියක් තිබිය යුතුය.",
        "නීතිවිරෝධී ව්‍යාපාර මෙහෙයුම් රෝල්ප්ලේ හරහා රහස්‍යභාවය පවත්වා ගත යුතුය.",
        "උදුරාගැනීමේ තත්ත්ව විශේෂිත මාර්ගෝපදේශ අනුගමනය කළ යුතුය (කාල සීමා, සාකච්ඡා, ආදිය)."
      ]
    },
    {
      title: "නීතිය ක්‍රියාත්මක කිරීමේ නීති",
      rules: [
        "නීතිය ක්‍රියාත්මක කරන චරිත නිසි ක්‍රියා පටිපාටි අනුගමනය කළ යුතුය.",
        "පොලිස් බලතල අනිසි ලෙස භාවිතා කිරීම විනය ක්‍රියාමාර්ගවලට හේතු වනු ඇත.",
        "පොලිසිය සෝදිසි කිරීම් සහ අත්අඩංගුවට ගැනීම් සඳහා සම්භාව්‍ය හේතුවක් තිබිය යුතුය.",
        "අපහසු තත්ත්වයන් සමඟ කටයුතු කරන විටත් වෘත්තීය හැසිරීම පවත්වා ගන්න.",
        "දෙපාර්තමේන්තු තුළ නිසි අණදීමේ දාමය අනුගමනය කරන්න.",
        "සක්‍රීය රාජකාරියට පෙර අවශ්‍ය පුහුණුව සම්පූර්ණ කරන්න.",
        "තත්ත්වය මත පදනම්ව සුදුසු බලය භාවිතා කරන්න.",
        "සියලුම සැලකිය යුතු පොලිස් ක්‍රියා සහ අත්අඩංගුවට ගැනීම් ලේඛනගත කරන්න.",
        "හදිසි ඇමතුම්වලට කාලෝචිත ලෙස ප්‍රතිචාර දක්වන්න.",
        "ඔබේ දෙපාර්තමේන්තුවට සහ කාර්යභාරයට ගැලපෙන නිල ඇඳුම් සහ උපකරණ පළඳින්න."
      ]
    }
  ]
};

const Rules = () => {
  const [language, setLanguage] = useState<"en" | "si">("en");
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "si" : "en");
  };

  const categories = ruleCategories[language];

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-20 md:py-24">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="mb-4">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors gap-1 text-sm mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> {language === "en" ? "Back to Home" : "මුල් පිටුවට"}
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Server Rules and Guidelines" : "සේවාදායක නීති සහ මාර්ගෝපදේශ"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "en" 
                ? "These rules are designed to ensure a fair, enjoyable, and immersive experience for all players. Failure to comply with these rules may result in warnings, temporary bans, or permanent removal from the server."
                : "මෙම නීති සියලුම ක්‍රීඩකයින්ට සාධාරණ, සතුටුදායක සහ ගිලී යන අත්දැකීමක් සහතික කිරීම සඳහා නිර්මාණය කර ඇත. මෙම නීති වලට අනුකූල නොවීම අනතුරු ඇඟවීම්, තාවකාලික තහනම් කිරීම්, හෝ සේවාදායකයෙන් ස්ථිර ඉවත් කිරීමකට හේතු විය හැක."}
            </p>
          </div>
          
          <div className="flex justify-center mb-6 gap-4">
            <Button asChild className="gap-2">
              <a href="/downloads" className="flex items-center gap-1.5">
                <Download className="h-4 w-4" /> 
                {language === "en" ? "Download Rule Book" : "නීති පොත බාගත කරන්න"}
              </a>
            </Button>
            
            <Button onClick={toggleLanguage} variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              {language === "en" ? "සිංහල" : "English"}
            </Button>
          </div>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <CardHeader className="bg-secondary/50 border-b">
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ol className="list-decimal list-inside space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="text-sm md:text-base">
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-secondary/20 p-4 md:p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              {language === "en" ? "Important Note" : "වැදගත් සටහන"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {language === "en"
                ? "These rules are subject to change at the discretion of the server administration. It is your responsibility to stay updated with the latest rules. The server staff has the final say in all rule interpretations and enforcement matters."
                : "මෙම නීති සේවාදායක පරිපාලනයේ අභිමතය පරිදි වෙනස් වීමට යටත් වේ. නවතම නීති සමඟ යාවත්කාලීනව සිටීම ඔබේ වගකීමකි. සියලුම නීති අර්ථ නිරූපණය සහ බලාත්මක කිරීමේ කරුණු වල අවසාන තීරණය සේවාදායක කාර්ය මණ්ඩලය සතුය."}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
