import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import AppModal from "../Shared/AppModal";
import ViewCaseStudy from "../Shared/ViewCaseStudy";
import SvgLine from "../SvgLine/SvgLine";
import burger from "../assets/burger.png";
function Countup() {
  useEffect(() => {
    Aos.init();
  }, []);

  // State variables for visibility of each section
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  // Refs for h2 elements in each section
  const h2Ref1 = useRef(null);
  const h2Ref2 = useRef(null);
  const h2Ref3 = useRef(null);

  // Intersection observer callback function
  const handleIntersection = (entries, observer, setIsVisible) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    // Create intersection observers for each section
    const observer1 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer1, setIsVisible1)
    );
    const observer2 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer2, setIsVisible2)
    );
    const observer3 = new IntersectionObserver((entries) =>
      handleIntersection(entries, observer3, setIsVisible3)
    );

    // Observe each h2 element
    if (h2Ref1.current) observer1.observe(h2Ref1.current);
    if (h2Ref2.current) observer2.observe(h2Ref2.current);
    if (h2Ref3.current) observer3.observe(h2Ref3.current);

    // Cleanup function
    return () => {
      if (h2Ref1.current) observer1.unobserve(h2Ref1.current);
      if (h2Ref2.current) observer2.unobserve(h2Ref2.current);
      if (h2Ref3.current) observer3.unobserve(h2Ref3.current);
    };
  }, []);

  const productCaseStudy = {
    title: "Case Study: Wild Ital",
    infos: [
      {
        title: "Background:",
        text: "Wild Ital is a brand specializing in natural, wellness-oriented products. With the growing trend of CBD products and the increasing consumer interest in health and wellness, Wild Ital developed a line of CBD-infused drinks designed to provide relaxation and health benefits. However, the market for CBD products is still emerging, and consumer awareness and acceptance can vary widely. CST Social Marketing was tasked with assessing the market potential and devising a strategy to position Wild Ital's CBD-infused drinks successfully.",
      },
      {
        title: "Qualitative Research:",
        text: "To understand customer desirability, CST Social Marketing conducted comprehensive qualitative research, including:",
        lists: [
          {
            title: "Focus Groups:",
            text: "Engaging with diverse consumer groups to discuss their attitudes towards CBD products and their potential interest in CBD-infused drinks.",
          },
          {
            title: "Online Surveys:",
            text: "Distributed surveys to a broader audience to gather quantitative data on consumer awareness, preferences, and purchase intentions.",
          },
        ]
      },
      {
        title: "Findings:",
        lists: [
          {
            title: "High Interest in Wellness:",
            text: "A significant portion of the target audience is highly interested in wellness products. Many participants expressed curiosity and willingness to try CBD-infused drinks due to perceived health benefits.",
          },
          {
            title: "Need for Education:",
            text: "There is a considerable knowledge gap about CBD among potential customers. Misconceptions about its effects and legality were common, indicating a need for educational marketing.",
          },
        ],
      },
      {
        title: "CST Marketing Strategy:",
        text: "Based on the findings, CST Social Marketing developed a multi-faceted strategy:",
        lists: [
          {
            title: "Educational Campaigns",
            text: "Create informative content to educate consumers about CBD, its benefits, and its legal status. This would include blog posts, infographics, and expert testimonials.",
          },
          {
            title: "Influencer Partnerships:",
            text: "Collaborate with wellness influencers and experts to build credibility and trust. Influencers can share their experiences with Wild Ital's CBD-infused drinks and educate their followers.",
          },
          {
            title: "Community Engagement:",
            text: "Host online and offline events, such as webinars and pop-up tasting events, to engage directly with the target audience and provide first-hand experience with the product.",
          },
          {
            title: "Social Media Marketing",
            text: "Utilize targeted social media ads to reach health-conscious consumers, focusing on platforms like Instagram and Facebook where wellness communities are active.",
          },
        ],
      },
      {
        title: "Marketing Execution:",
        lists: [
          {
            title: "Content Creation",
            text: "Developed a series of educational blog posts, videos, and infographics explaining the benefits of CBD, how it works, and addressing common misconceptions.",
          },
          {
            title: "Influencer Campaigns:",
            text: "Partnered with wellness influencers who shared their positive experiences with Wild Ital's drinks through social media posts, stories, and YouTube reviews.",
          },
          {
            title: "Community Events:",
            text: "Organized online webinars featuring health experts discussing the benefits of CBD, along with live Q&A sessions. Additionally, hosted pop-up tasting events in key urban locations.",
          },
          {
            title: "Social Media Ads:",
            text: "Launched targeted ad campaigns on Instagram and Facebook, highlighting the natural ingredients and wellness benefits of Wild Ital's drinks. Ads were tailored to different demographics identified during the research phase.",
          },
        ],
      },
      {
        title: "Results:",
        text: "The strategic marketing efforts led to significant positive outcomes:",
        lists: [
          {
            title: "Sales Growth:",
            text: "Within six months, Wild Ital saw a 40% increase in sales of their CBD-infused drinks, indicating strong market acceptance and customer desirability.",
          },
          {
            title: "Increased Awareness:",
            text: "Educational campaigns and influencer partnerships significantly raised awareness about CBD and Wild Ital's products.",
          },
          {
            title: "High Engagement:",
            text: "Community events and social media activities generated high levels of engagement, with substantial participation in webinars and pop-up events.",
          },
          {
            title: "Positive Feedback:",
            text: "Customer feedback was overwhelmingly positive, with many praising the taste and perceived health benefits of the drinks. The educational content helped mitigate concerns and build consumer trust.",
          },
        ],
      },
    ],
  };

  const brandCaseStudy = {
    title: "Case Study: Scent Pillow llc",
    infos: [
      {
        title: "Campaign Duration:",
        text: "January 2023 - June 2023",
      },
      {
        title: "Objective:",
        text: "To enhance brand awareness and educate the market about the benefits of Scent Pillow, an innovative aromatherapy sleep aid.",
      },
      {
        title: "Background:",
        text: "Scent Pillow emerged with a unique proposition in the wellness and home comfort market: a scent adhesive strip that attaches to pillows, releasing soothing aromas to aid sleep, reduce anxiety, and improve relaxation. Despite the innovative nature of the product, Scent Pillow struggled to capture significant market attention in a saturated wellness industry.",
      },
      {
        title: "Problem Statement:",
        text: "Many individuals suffer from insomnia and anxiety, seeking natural solutions to improve their sleep quality and overall well-being. Scent Pillow needed to establish itself as a go-to solution by increasing its visibility and relevance in the marketplace.",
      },
      {
        title: "Target Audience:",
        text: "The primary audience was health-conscious adults aged 25-45, predominantly female, who regularly invest in wellness products such as essential oils, yoga mats, and organic supplements. This demographic is active on social media, primarily Instagram and Pinterest, and values products that contribute to a healthier lifestyle.",
      },
      {
        title: "Strategy and Execution:",
        lists: [
          {
            title: "Influencer Partnerships:",
            text: "Partnered with 15 wellness influencers with followings ranging from 10k to 500k on Instagram. Influencers shared their personal experiences with Scent Pillow, emphasizing the benefits in their sleep patterns and overall mood stabilization. Result: Achieved a reach of over 1.2 million impressions and a 5% engagement rate across all influencer posts.",
          },
          {
            title: "Social Media Campaigns:",
            text: "Launched the #DreamWithScent campaign across Instagram, Facebook, and Pinterest. Created engaging content including customer testimonials, educational posts about aromatherapy benefits, and soothing visuals of bedroom environments enhanced by Scent Pillow. Hosted bi-weekly giveaways to encourage user participation and sharing. Result: Gained 4,000 new followers on Instagram and saw a 45% increase in user interaction rate over six months.",
          },
          {
            title: "Paid Advertising:",
            text: "Implemented targeted Facebook and Google AdWords campaigns using demographic and psychographic data to reach likely buyers. Ads highlighted product benefits and incorporated direct calls to action such as “Shop Now” for immediate conversion. Result: Achieved a return on ad spend (ROAS) of 4:1, with a 25% conversion rate increase.",
          },
        ],
      },
      {
        title: "Final Results:",
        lists: [
          {
            title: "Brand Awareness:",
            text: "Over 50% increase in brand recognition as measured through pre- and post-campaign surveys.",
          },
          {
            title: "Engagement: ",
            text: "More than doubled social media engagement rates and sustained a high level of interaction post-campaign.",
          },
          {
            title: "Sales: ",
            text: "Recorded a 30% uplift in sales directly attributable to marketing efforts",
          },
          {
            title: "Customer Acquisition: ",
            text: "Reduced cost per acquisition by 40%, demonstrating improved targeting and conversion efficiency.",
          },
        ],
      },
      {
        title: "Conclusion:",
        text: "The Scent Pillow brand awareness campaign executed by CST Social Marketing successfully introduced the product to a broader audience and established its reputation as a credible and desirable solution for better sleep and relaxation. Through strategic influencer collaborations, compelling social media initiatives, and effective content and ad strategies, Scent Pillow is now well-positioned for continued growth and success in the wellness market.",
      },
    ],
  };

  const reputationCaseStudy = {
    title: "Case Study: City Lobster",
    infos: [
      {
        title: "Background:",
        text: "City Lobster is a seafood restaurant with locations across New Jersey. Known for its fresh catches and vibrant ambiance, City Lobster has built a loyal customer base over the years. With the rise of online food ordering platforms, the restaurant aimed to expand its digital presence and increase online orders.",
      },
      {
        title: "Problem Statement:",
        text: "Despite its strong offline reputation, City Lobster faced challenges in translating its brand equity into the digital realm. Negative reviews and limited online visibility were hampering its potential for growth. The restaurant needed a comprehensive strategy to enhance its online brand reputation and drive customer satisfaction, ultimately leading to an increase in online orders.",
      },
      {
        title: "CST Solution:",
        text: "CST Social Marketing was hired  to address City Lobster's concerns with a tailored brand reputation management service. The strategy encompassed several key elements:",
      },
      {
        title: "Online Reputation Monitoring:",
        text: "CST conducted a thorough analysis of City Lobster's online presence, monitoring social media platforms, review sites like Yelp, online food delivery platforms such as UberEats, and Google search engine results to identify areas for improvement.",
      },
      {
        title: "Review Management:",
        text: "CST implemented a proactive approach to managing online reviews across platforms. With dedicated personnel monitoring Yelp, UberEats, Door Dash and Google reviews, CST ensured timely responses to both positive and negative feedback. Positive reviews were acknowledged and appreciated, while negative feedback was addressed promptly, demonstrating City Lobster's commitment to customer satisfaction.",
      },
      {
        title: "Social Media Engagement:",
        text: "CST leveraged social media channels to foster a sense of community among City Lobster's online followers, encouraging user-generated content and interaction. By actively engaging with customers on platforms like Facebook, Instagram, and Tik Tok, City Lobster humanized its brand and strengthened connections with its audience.",
      },
      {
        title: "Results:",
        text: "The implementation of CST's brand reputation management service yielded impressive results for City Lobster.",
      },
      {
        title: "Positive Review Increase:",
        text: "Within the first three months, City Lobster experienced a 25% increase in positive online reviews across platforms like Yelp, UberEats, and Google, reflecting improved customer satisfaction and brand perception.",
      },
      {
        title: "Online Visibility:",
        text: "The restaurant's presence on search engine results and social media platforms saw a significant boost, with a 30% increase in impressions and engagement.",
      },
      {
        title: "Order Growth:",
        text: "As a direct result of enhanced brand reputation and online visibility, City Lobster witnessed a 40% increase in online orders, driving revenue growth and solidifying its position in the digital marketplace.",
      },
      {
        title: "Conclusion:",
        text: "By leveraging social platforms like Yelp, UberEats, and Google to monitor customer experiences and respond to feedback in a timely manner, City Lobster effectively managed its online brand reputation, fostering trust and loyalty among customers and driving tangible business results.",
      },
    ],
  };

  return (
    <div className="relative">
        <section className="banner text-center md:text-left container px-3 pt-[50px] lg:px-8 mx-auto flex flex-col md:flex-row items-center lg:justify-between relative">
  
          <div className="md:space-y-5 2xl:space-y-6 md:w-1/2 md:pr-8" data-aos="fade-left">
            <h2 ref={h2Ref1} className="blog_heading py-5">
              {isVisible1 ? <CountUp end={63} duration={2} start={0} /> : "63%"}%
            </h2>
            <h2 className="blog_heading2 text-3xl sm:text-4xl md:text-4xl">Your Target Audeince</h2>
            <p>
              Your business growth relies on connecting with the right customers. 
              63% of consumers prefer to buy from brands that truly 
              understand their needs. At CST Social Marketing, we help business owners 
              uncover insights about their target market through qualitative research. 
            </p>
            <div className="flex justify-center md:justify-start pb-4 md:pb-[50px]">
              <AppModal
                button={
                  <button className="flex items-center justify-center md:justify-start text-[18px] font-semibold underline rounded-full">
                    {/* View Case Study */}
                  </button>
                }
              >
                <ViewCaseStudy caseStudy={productCaseStudy} />
              </AppModal>
            </div>
          </div>

          <div className="mt-4 md:mt-0 lg:mt-14 md:w-1/2 md:h-[520px] 2xl:h-[700px]" data-aos="fade-right">
            <img 
              src="/img/final_target.png" 
              alt="" 
              className="w-full h-[300px] sm:h-[400px] md:h-full object-cover rounded-3xl ml-auto" 
            />
          </div>


          <SvgLine
            path="M0.500977 0V509.5C0.500977 526.069 13.9324 539.5 30.501 539.5H2458C2474.57 539.5 2488 552.932 2488 569.5V1007"
            svgClassName={"xl:ml-[100px] 2xl:ml-[80px]"}
            wrapClassName={"lg:bottom-[-200px]"}
          />
        </section>


        <section className="banner container text-center px-3 pt-[50px] md:pt-[180px] lg:pt-[280px] 2xl:pt-[100px] lg:px-8 mx-auto flex flex-col-reverse md:flex-row items-center relative">
          <div className="mt-8 md:mt-0 md:w-2/3 lg:w-2/3 xl:w-[55%]" data-aos="fade-left">
            <img 
              src="/img/brand-1.png" 
              alt="" 
              className="w-full h-[300px] sm:h-[400px] md:h-[auto] xl:h-[450px] 2xl:h-[500px] object-cover transform scale-110" 
            />
          </div>

          <div className="md:space-y-5 2xl:space-y-6 md:w-1/2 md:pr-8 text-center md:text-right" data-aos="fade-right">
            <h2 ref={h2Ref2} className="blog_heading py-5">
              {isVisible2 ? <CountUp end={73} /> : "73%"}%
            </h2>
            <h2 className="blog_heading2 pb-2 text-3xl sm:text-4xl md:text-4xl">Brand Awareness</h2>
            <p>
              We help business owners like you create powerful, recognizable brands that stand out in crowded markets. 
              70% of consumers are more likely to purchase from a brand they recognize.
            </p>
            <div className="pt-2 flex justify-center md:justify-end pb-4 md:pb-[50px]">
              <AppModal
                button={
                  <button className="flex items-center justify-center md:justify-start text-[18px] font-semibold underline rounded-full">
                    {/* View Case Study */}
                  </button>
                }
              >
                <ViewCaseStudy caseStudy={brandCaseStudy} />
              </AppModal>
            </div>
          </div>
          <SvgLine
            svgClassName={"xl:ml-[120px] xl:mb-[200px] lg:ml-[100px] 2xl:ml-[130px]"}
            path="M2488 0V509.5C2488 526.069 2474.57 539.5 2458 539.5H31C14.4314 539.5 0.999955 552.932 0.999955 569.5V1007"
          />
        </section>


        <section className="container text-center md:text-left px-3 pt-[50px] md:pt-[240px] lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between relative">
          <div
            className="md:w-1/2 md:pr-8"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="md:space-y-5 2xl:space-y-6">
              <h2 ref={h2Ref3} className="blog_heading">
                {isVisible3 ? <CountUp end={98} /> : "98%"}%
              </h2>
              <h2 className="blog_heading2 pb-2 text-3xl sm:text-4xl md:text-4xl">
                Customer Retargeting 
              </h2>
              <p>
                Did you know that only 2% of website visitors make a purchase on their first visit? 
                Retargeting marketing allows you to reconnect with the 98% who leave without buying. 
                At CST Social Marketing, we use retargeting marketing to re-engage potential customers 
                who have visited your site but didn’t complete a purchase.
              </p>
              <div className="flex justify-center md:justify-start pt-5 pb-8 md:pb-0">
                <AppModal
                  button={
                    <button className="flex items-center justify-center md:justify-start text-center md:text-left text-[18px] font-semibold leading-[22px] underline rounded-full">
                      {/* View Case Study */}
                    </button>
                  }
                >
                  <ViewCaseStudy caseStudy={reputationCaseStudy} />
                </AppModal>
              </div>
            </div>
          </div>

          <div
            className="md:w-3/4 lg:w-full flex items-end"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="/img/new-img3.png"
              alt="burger"
              className="z-10 lg:mb-2 w-full md:max-w-[700px] rounded-3xl mx-auto md:mr-0 transform scale-110" // Increased scale to enlarge the image
            />
          </div>

          <div className="size-[200px] lg:size-[500px] absolute right-[2.5%] -z-10 blur-[50px] rounded-full bg-[#2337C6]/[0.4]"></div>
        </section>



      <img
        src="/img/shadow.png"
        className="absolute left-0 top-[-15%] -z-10 opacity-80"
        alt=""
      />
      <img
        src="/img/shadow.png"
        className="absolute left-0 top-1/4 -z-10 opacity-80"
        alt=""
      />
      <img
        src="/img/shadow-right.png"
        className="absolute right-0 top-[10%] -z-10"
        alt=""
      />
    </div>
  );
}

export default Countup;
