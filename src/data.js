export const data = {
  banking: {
    connections: [
      {
        id: 332082,
        bankId: 277672,
        bank: {
          id: 277672,
          name: 'FinAPI Test Bank',
          loginHint: null,
          bic: null,
          blz: '00000000',
          blzs: ['00000000'],
          loginFieldUserId: 'Onlinebanking-ID',
          loginFieldCustomerId: null,
          loginFieldPin: 'PIN',
          isSupported: true,
          supportedDataSources: ['FINTS_SERVER'],
          pinsAreVolatile: false,
          location: null,
          city: null,
          isTestBank: true,
          popularity: 15,
          health: 100,
          lastCommunicationAttempt: '2018-07-13 08:59:14.000',
          lastSuccessfulCommunication: '2018-07-13 08:59:14.000',
        },
        name: 'Mein Konto',
        bankingUserId: 'XXXXX',
        bankingCustomerId: null,
        bankingPin: 'XXXXX',
        type: 'DEMO',
        updateStatus: 'READY',
        categorizationStatus: 'READY',
        lastManualUpdate: null,
        lastAutoUpdate: null,
        twoStepProcedures: [],
        ibanOnlyMoneyTransferSupported: false,
        ibanOnlyDirectDebitSupported: false,
        collectiveMoneyTransferSupported: false,
        defaultTwoStepProcedureId: null,
        accountIds: [549995],
        owners: null,
      },
    ],
    accounts: [
      {
        id: 549995,
        bankConnectionId: 332082,
        accountName: 'Testaccount',
        accountNumber: '12345678',
        subAccountNumber: 'Testaccount',
        iban: null,
        accountHolderName: null,
        accountHolderId: null,
        accountCurrency: null,
        accountTypeId: 1,
        accountTypeName: 'Checking',
        balance: 1410.39,
        overdraft: null,
        overdraftLimit: null,
        availableFunds: null,
        lastSuccessfulUpdate: '2018-07-11 08:36:18.000',
        lastUpdateAttempt: '2018-07-11 08:36:09.000',
        isNew: true,
        status: 'UPDATED',
        supportedOrders: [],
        clearingAccounts: [],
      },
    ],
    loading: false,
    transactions: {
      '549995': {
        loading: false,
        items: [
          {
            id: 115707688,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-20 00:00:00.000',
            bankBookingDate: '2018-06-20 00:00:00.000',
            finapiBookingDate: '2018-06-20 00:00:00.000',
            amount: -260.01,
            purpose: 'Vielen Dank',
            counterpartName: 'Lidl Leopoldstr.',
            counterpartAccountNumber: '1166655',
            counterpartIban: 'DE24700800000116665500',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 406,
              name: 'Lebensmittel & Getränke',
              parentId: 401,
              parentName: 'Lebenshaltung',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707685,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-19 00:00:00.000',
            bankBookingDate: '2018-06-19 00:00:00.000',
            finapiBookingDate: '2018-06-19 00:00:00.000',
            amount: -76.95,
            purpose: 'Vielen Dank',
            counterpartName: 'JET Tankstelle, Hohenlohe',
            counterpartAccountNumber: '232353',
            counterpartIban: 'DE56700800000023235300',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 308,
              name: 'Tanken',
              parentId: 301,
              parentName: 'Mobilität',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707686,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-19 00:00:00.000',
            bankBookingDate: '2018-06-19 00:00:00.000',
            finapiBookingDate: '2018-06-19 00:00:00.000',
            amount: -150,
            purpose: 'GA 470/11',
            counterpartName: 'Barabhebung',
            counterpartAccountNumber: '1055545',
            counterpartIban: 'DE80700800000105554500',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 335,
              name: 'Barauszahlung',
              parentId: 333,
              parentName: 'Bank & Kredit',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707684,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-18 00:00:00.000',
            bankBookingDate: '2018-06-18 00:00:00.000',
            finapiBookingDate: '2018-06-18 00:00:00.000',
            amount: -350,
            purpose: 'Übernachtung',
            counterpartName: 'Hotel am Wasserturm Köln',
            counterpartAccountNumber: '12365894',
            counterpartIban: 'DE33700800000012365894',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 413,
              name: 'Hotel & Unterkunft',
              parentId: 409,
              parentName: 'Reisen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707683,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-17 00:00:00.000',
            bankBookingDate: '2018-06-17 00:00:00.000',
            finapiBookingDate: '2018-06-17 00:00:00.000',
            amount: -26.91,
            purpose: 'Vielen Dank für Ihren Einkauf',
            counterpartName: 'Aldi Sued',
            counterpartAccountNumber: '1222210',
            counterpartIban: 'DE93700800000122221000',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 406,
              name: 'Lebensmittel & Getränke',
              parentId: 401,
              parentName: 'Lebenshaltung',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707681,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-16 00:00:00.000',
            bankBookingDate: '2018-06-16 00:00:00.000',
            finapiBookingDate: '2018-06-16 00:00:00.000',
            amount: -264.51,
            purpose: 'Vielen Dank',
            counterpartName: 'Gasthaus Chinesischer Turm',
            counterpartAccountNumber: '777770',
            counterpartIban: 'DE26700800000077777000',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 378,
              name: 'Restaurant / Cafe / Bar',
              parentId: 373,
              parentName: 'Freizeit, Hobbies & Soziales',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707682,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-16 00:00:00.000',
            bankBookingDate: '2018-06-16 00:00:00.000',
            finapiBookingDate: '2018-06-16 00:00:00.000',
            amount: -135.89,
            purpose: '4/302460/639',
            counterpartName: 'ALLIANZ LV / FLESSA KG',
            counterpartAccountNumber: '124578965',
            counterpartIban: 'DE18700800000124578965',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 418,
              name: 'Versicherung',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [419, 420, 421, 422, 423, 424, 425, 546, 547, 548, 549],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707680,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-15 00:00:00.000',
            bankBookingDate: '2018-06-15 00:00:00.000',
            finapiBookingDate: '2018-06-15 00:00:00.000',
            amount: -1325,
            purpose: 'Miete Agnestr. 46',
            counterpartName: 'Peter Schaller',
            counterpartAccountNumber: '39985',
            counterpartIban: null,
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 550,
              name: 'Miete / Wohngeld',
              parentId: 426,
              parentName: 'Wohnen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707679,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-14 00:00:00.000',
            bankBookingDate: '2018-06-14 00:00:00.000',
            finapiBookingDate: '2018-06-14 00:00:00.000',
            amount: 3,
            purpose: 'HERZLICHEN GLÜCKWUNSCH ZU IHREM GEWINN LOS 0815',
            counterpartName: 'VB Musterstadt',
            counterpartAccountNumber: '39985',
            counterpartIban: null,
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsgutschrift',
            primanota: null,
            category: {
              id: 324,
              name: 'Kapitaleinkommen',
              parentId: 320,
              parentName: 'Einnahmen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707677,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-13 00:00:00.000',
            bankBookingDate: '2018-06-13 00:00:00.000',
            finapiBookingDate: '2018-06-13 00:00:00.000',
            amount: 3843.69,
            purpose: 'Lohn und Gehalt',
            counterpartName: 'Braumüller GmbH',
            counterpartAccountNumber: '44635',
            counterpartIban: null,
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsgutschrift',
            primanota: null,
            category: {
              id: 323,
              name: 'Gehalt',
              parentId: 320,
              parentName: 'Einnahmen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707678,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-13 00:00:00.000',
            bankBookingDate: '2018-06-13 00:00:00.000',
            finapiBookingDate: '2018-06-13 00:00:00.000',
            amount: -50,
            purpose: 'Gewinnsparen',
            counterpartName: 'VB Musterstadt',
            counterpartAccountNumber: '999914',
            counterpartIban: 'DE56700800000099991400',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 333,
              name: 'Bank & Kredit',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [334, 335, 338, 340, 527],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707676,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-12 00:00:00.000',
            bankBookingDate: '2018-06-12 00:00:00.000',
            finapiBookingDate: '2018-06-12 00:00:00.000',
            amount: 37.5,
            purpose: 'DIVIDENDE 2014',
            counterpartName: 'VB Musterstadt',
            counterpartAccountNumber: '188982',
            counterpartIban: 'DE58700800000018898200',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsgutschrift',
            primanota: null,
            category: {
              id: 526,
              name: 'Bareinzahlung',
              parentId: 320,
              parentName: 'Einnahmen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707675,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-11 00:00:00.000',
            bankBookingDate: '2018-06-11 00:00:00.000',
            finapiBookingDate: '2018-06-11 00:00:00.000',
            amount: -99.99,
            purpose: '5/12346/645',
            counterpartName: 'ALLIANZ Lebensversicherungs AG',
            counterpartAccountNumber: '1445430',
            counterpartIban: 'DE73700800000144543000',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 422,
              name: 'Risiko-Lebensversicherung',
              parentId: 418,
              parentName: 'Versicherung',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707674,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-10 00:00:00.000',
            bankBookingDate: '2018-06-10 00:00:00.000',
            finapiBookingDate: '2018-06-10 00:00:00.000',
            amount: -235.11,
            purpose: 'BEITRAG KRANKENVERSICHERUNG',
            counterpartName: 'HUK-COBURG-KRANKENVERS. AG',
            counterpartAccountNumber: '811346',
            counterpartIban: 'DE56700800000081134600',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 421,
              name: 'Krankenversicherung',
              parentId: 418,
              parentName: 'Versicherung',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707673,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-09 00:00:00.000',
            bankBookingDate: '2018-06-09 00:00:00.000',
            finapiBookingDate: '2018-06-09 00:00:00.000',
            amount: -400,
            purpose: 'Dauerauftrag: Sparen',
            counterpartName: 'Girokonto',
            counterpartAccountNumber: '1324861',
            counterpartIban: 'DE08700800000132486100',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 528,
              name: 'Sparen & Anlegen',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [529, 530, 531, 532, 533, 534],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707672,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-08 00:00:00.000',
            bankBookingDate: '2018-06-08 00:00:00.000',
            finapiBookingDate: '2018-06-08 00:00:00.000',
            amount: -200,
            purpose: 'Sparen',
            counterpartName: 'Max Mustermann',
            counterpartAccountNumber: '47112',
            counterpartIban: null,
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 528,
              name: 'Sparen & Anlegen',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [529, 530, 531, 532, 533, 534],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707671,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-07 00:00:00.000',
            bankBookingDate: '2018-06-07 00:00:00.000',
            finapiBookingDate: '2018-06-07 00:00:00.000',
            amount: -200,
            purpose: 'Sparen',
            counterpartName: 'Max Mustermann',
            counterpartAccountNumber: '47112',
            counterpartIban: null,
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 528,
              name: 'Sparen & Anlegen',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [529, 530, 531, 532, 533, 534],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707669,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-06 00:00:00.000',
            bankBookingDate: '2018-06-06 00:00:00.000',
            finapiBookingDate: '2018-06-06 00:00:00.000',
            amount: -259.71,
            purpose: 'Restaurantbesuch',
            counterpartName: 'Bar Centrale',
            counterpartAccountNumber: '4578522',
            counterpartIban: 'DE42700800000457852200',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 378,
              name: 'Restaurant / Cafe / Bar',
              parentId: 373,
              parentName: 'Freizeit, Hobbies & Soziales',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707670,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-06 00:00:00.000',
            bankBookingDate: '2018-06-06 00:00:00.000',
            finapiBookingDate: '2018-06-06 00:00:00.000',
            amount: 700,
            purpose: 'Umbuchung',
            counterpartName: 'DAB bank AG',
            counterpartAccountNumber: '12698321',
            counterpartIban: 'DE11700800000012698321',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsgutschrift',
            primanota: null,
            category: {
              id: 301,
              name: 'Mobilität',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [306, 308, 523, 524, 525],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707667,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-05 00:00:00.000',
            bankBookingDate: '2018-06-05 00:00:00.000',
            finapiBookingDate: '2018-06-05 00:00:00.000',
            amount: -48.5,
            purpose: 'Monatskarte',
            counterpartName: 'Deutsche Bahn AG',
            counterpartAccountNumber: '569',
            counterpartIban: 'DE90700800000000000569',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 545,
              name: 'Transport',
              parentId: 409,
              parentName: 'Reisen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707668,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-05 00:00:00.000',
            bankBookingDate: '2018-06-05 00:00:00.000',
            finapiBookingDate: '2018-06-05 00:00:00.000',
            amount: -36.23,
            purpose: 'Vielen Dank',
            counterpartName: 'Confetti Restaurant',
            counterpartAccountNumber: '69854321',
            counterpartIban: 'DE05700800000069854321',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 378,
              name: 'Restaurant / Cafe / Bar',
              parentId: 373,
              parentName: 'Freizeit, Hobbies & Soziales',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707666,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-04 00:00:00.000',
            bankBookingDate: '2018-06-04 00:00:00.000',
            finapiBookingDate: '2018-06-04 00:00:00.000',
            amount: 400,
            purpose: 'Abrechnung',
            counterpartName: 'Lohn/Gehalt',
            counterpartAccountNumber: '125542',
            counterpartIban: 'DE26700800000012554200',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsgutschrift',
            primanota: null,
            category: {
              id: 323,
              name: 'Gehalt',
              parentId: 320,
              parentName: 'Einnahmen',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707665,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-03 00:00:00.000',
            bankBookingDate: '2018-06-03 00:00:00.000',
            finapiBookingDate: '2018-06-03 00:00:00.000',
            amount: -100,
            purpose: 'GA 470/11',
            counterpartName: 'Barabhebung',
            counterpartAccountNumber: '5564789',
            counterpartIban: 'DE63700800000556478900',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 335,
              name: 'Barauszahlung',
              parentId: 333,
              parentName: 'Bank & Kredit',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707664,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-02 00:00:00.000',
            bankBookingDate: '2018-06-02 00:00:00.000',
            finapiBookingDate: '2018-06-02 00:00:00.000',
            amount: -18.69,
            purpose: 'Vielen Dank für Ihren Besuch',
            counterpartName: 'Cafe am Dom',
            counterpartAccountNumber: '998642',
            counterpartIban: 'DE74700800000099864200',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 378,
              name: 'Restaurant / Cafe / Bar',
              parentId: 373,
              parentName: 'Freizeit, Hobbies & Soziales',
              isCustom: false,
              children: null,
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
          {
            id: 115707663,
            parentId: null,
            accountId: 549995,
            valueDate: '2018-06-01 00:00:00.000',
            bankBookingDate: '2018-06-01 00:00:00.000',
            finapiBookingDate: '2018-06-01 00:00:00.000',
            amount: -35.69,
            purpose: 'Ihr Einkauf bei Mustershop',
            counterpartName: 'ebay',
            counterpartAccountNumber: '1249887',
            counterpartIban: 'DE23700800000124988700',
            counterpartBlz: '70080000',
            counterpartBic: 'DRESDEFF700',
            counterpartBankName: 'Commerzbank vormals Dresdner Bank',
            counterpartMandateReference: null,
            counterpartCustomerReference: null,
            counterpartCreditorId: null,
            type: null,
            typeCodeZka: null,
            typeCodeSwift: 'Überweisungsauftrag',
            primanota: null,
            category: {
              id: 391,
              name: 'Shopping & Unterhaltung',
              parentId: null,
              parentName: null,
              isCustom: false,
              children: [400, 538, 539, 540, 541],
            },
            labels: [],
            isPotentialDuplicate: false,
            isAdjustingEntry: false,
            isNew: true,
            importDate: '2018-07-11 08:36:14.000',
            children: null,
            paypalData: null,
          },
        ],
        paging: {
          page: 2,
          perPage: 25,
          pageCount: 56,
          totalCount: 1387,
        },
      },
    },
    import: {},
    error: null,
  },
};