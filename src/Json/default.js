module.exports.defaultJson = {
  numberOfSteps: 2,
  nextButton: 'Next Step',
  ctaButton: 'Calculate',
  heroBackground: '',
  parterId: null,
  campaignId: null,
  heroVersion: 1,
  hero: {
    title: 'Calculate Cognni’s ROI',
    sub_title:
      'See how much you can save with autonomous mapping </br> and information intelligence',
    button_text: 'Start Calculation',
    logo: '/CompanyLogo.svg',
  },
  heroTabMenu: {
    status: false,
    brandLogo: String,
    tabs: [
      {
        name: '',
        href: '',
      },
    ],
  },
  conclusion: {
    title: 'Thanks for participation <br/> in our survey!',
    sub_title: 'We send you our deal on your email.',
  },
  terms: {
    content:
      'I agree to receive my quiz results and a series of emails that will teach me how to get potential financial impact. I also have read and agree to the Privacy Policy and Terms of Service.',
    privacyPolicyUrl: '/',
    termsOfServiceUrl: '/',
  },
  steps: [
    {
      index: 1,
      fields: [
        {
          name: 'Number of employees',
          stateName: 'numberEmployees',
          text: 'Number of employees',
          questionType: 'numeric',
          placeholder: 'Enter number',
        },
        {
          name: 'email',
          stateName: 'email',
          text: 'Enter your corporate email to get started',
          placeholder: 'Corporate email',
          questionType: 'text',
          validation: 'email',
        },
      ],
      button: 'Next Step',
    },
    {
      index: 2,
      fields: [
        {
          name: 'Working with cloud v2?',
          stateName: 'workingCloudv2',
          text: 'Which of those information risks are you working to minimize in the next 12 months?',
          questionType: 'booleanMulti',

          options: [
            {
              text: 'Data breach',
              icon: 'fa-check',
            },
            {
              text: 'Insider Threats',
              icon: 'fa-check',
            },
            {
              text: 'Insider Threats',
              icon: false,
            },
            {
              text: 'Regulation & Compliance',
              icon: false,
            },
            {
              text: 'Ransomware',
              icon: false,
            },
          ],
        },
      ],
      button: 'Next Step',
    },
    {
      index: 3,
      fields: [
        {
          name: 'how do you',
          stateName: 'howProtectInfo',
          text: 'How are you protecting your information?',
          placeholder: 'Choose answer',
          questionType: 'dropdown',
          options: [
            {
              text: 'Not yet',
            },
            {
              text: 'Microsoft Information Protection',
            },
            {
              text: 'Forcepoint DLP',
            },
            {
              text: 'Mcafee DLP',
            },
            {
              text: 'Other DLP',
            },
          ],
        },
        {
          name: 'how do you risk',
          stateName: 'howProtectRisk',
          text: 'How are you protecting your information?',
          placeholder: 'Choose answer',
          questionType: 'dropdown',
          options: [
            {
              text: 'Not yet',
            },
            {
              text: 'Microsoft Cloud App Security',
            },
            {
              text: 'Microsoft Sentinel',
            },
            {
              text: 'Other CASB or SIEM',
            },
          ],
        },
      ],
    },
  ],
  stats: {
    tabMenuMod: 2,
    ctaText: 'Want to Learn More?',
    ctaUrl: '/',
    currency: '$',
    disclaimer: false,
    tabMenus: [
      {
        key: 0,
        subTitle: 'Savings',
        name: 'Cost of Information Protection',
        mainTitle: 'Potential financial impact',
        tooltip: true,
        costs: [
          {
            yourCost: {
              title: 'Your Current Cost',
              amount: '1389600',
            },
            cognniCost: {
              title: 'With Cognni',
              amount: '1036560',
            },
          },
        ],
        labels: [
          {
            color: '#2196F3',
            name: 'Classiying your critical data',
            formulaVariable: 122,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#00B746',
            name: 'Managing information behavior',
            formulaVariable: 11,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#565656',
            name: 'Detecting information risks',
            formulaVariable: 140,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#FFC300',
            name: 'Investigating risks',
            formulaVariable: 34,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
        ],
      },
      {
        key: 1,
        name: 'Cost of Exposure',
        subTitle: 'Savings',
        mainTitle: 'Potential financial impact',
        tooltip: true,
        costs: [
          {
            yourCost: {
              title: 'Your Current Cost',
            },
            cognniCost: {
              title: 'With Cognni',
            },
          },
        ],
        labels: [
          {
            color: '#2196F3',
            name: 'Insider Risk',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#00B746',
            name: 'Data Breach',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          {
            color: '#565656',
            name: 'Ransomware',
            formulaVariable: 130,
            tooltipText: {
              title: 'Classiying your critical data',
              content:
                "The Cognni Calculator is intended to provide an example of your potential savings when using the Cognni Security Management Solution, the results are based on your input and some assumptions derived from Cognni's experience.",
            },
          },
          // {
          //   color: '#FFC300',
          //   name: 'Investigating risks',
          //   formulaVariable: 130,
          // },
        ],
      },
    ],
  },
};
