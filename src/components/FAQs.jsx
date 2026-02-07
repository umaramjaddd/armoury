// src/components/FAQs.jsx
"use client"
import { useState } from "react"

const faqs = [
  {
    question: "What is Arshad Armoury?",
    answer: "Arshad Armoury is a premium brand crafting leather goods and armour with unmatched craftsmanship."
  },
  {
    question: "Where are your products made?",
    answer: "All our products are handcrafted locally using high-quality materials."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship our products worldwide. Shipping fees may vary depending on the destination."
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! We offer custom orders for select products. Contact us with your requirements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and Stripe for secure payments."
  },
  {
    question: "Do you offer refunds or exchanges?",
    answer: "Yes, we have a 14-day return policy for defective or damaged items."
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic shipping usually takes 3-7 business days, while international shipping may take 2-4 weeks."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order is shipped, you will receive a tracking number via email."
  },
  {
    question: "Are your materials ethically sourced?",
    answer: "Yes, we ensure that all our materials are sourced responsibly and ethically."
  },
  {
    question: "Do you sell to businesses or only individuals?",
    answer: "We cater to both individual and business clients. Bulk orders can be arranged."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via our Contact page or email us directly at support@arshadarmoury.com."
  },
  {
    question: "Do you have a physical store?",
    answer: "Currently, we operate online only, but you can visit us by appointment."
  },
  {
    question: "Can I request a product catalog?",
    answer: "Yes, we provide a digital catalog upon request via our Contact page."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes, gift wrapping is available for select products during checkout."
  },
  {
    question: "How often do you release new collections?",
    answer: "We release new collections seasonally, with occasional limited editions throughout the year."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-3 py-12">
      <h2 className="text-3xl md:text-4xl font-heading text-zinc-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-zinc-200  p-4 cursor-pointer hover:border-amber-700 transition"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg md:text-xl font-medium text-zinc-900 flex justify-between items-center">
              {faq.question}
              <span className="ml-2 text-amber-700">
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            {openIndex === index && (
              <p className="text-zinc-700 mt-2 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
