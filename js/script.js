
const dt = luxon.DateTime;
const { createApp } = Vue;
createApp({
    data() {
        return {
            risposta: "",
            indexChat: 0,
            userResearch: "",
            isHidden :[],
            newMessages: {
                date: "",
                message: "",
                status: "",
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        };
    },
    created() {

    },
    methods: {
        chatInitialization: function (index) {
            this.indexChat = index;
        },

        submit: function () {
            const now = dt.now();
            this.newMessages.date = now.setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
            this.newMessages.status = "sent";
            const copyMessage = { ...this.newMessages };
            this.contacts[this.indexChat].messages.push(copyMessage);
            this.newMessages.message = "";
            this.newMessages.status = "";
            this.newMessages.date = "";

            this.autoreply();
        },
        autoreply: function () {
            this.risposta = setTimeout(() => {
                const now = dt.now();
                this.newMessages.date = now.setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
                this.newMessages.status = "received";
                let num = Math.floor(Math.random() * 5);
                const risposteRandom = ["ok", "va bene", "d’accordo", "sì", "okey", "perfetto"];
                this.newMessages.message = risposteRandom[num];
                const copyMessage = { ...this.newMessages };
                this.contacts[this.indexChat].messages.push(copyMessage);
                this.newMessages.message = "";
                this.newMessages.status = "";
                this.newMessages.date = "";
            }, 4000);
        },
        research: function () {
            for (let i = 0; i < this.contacts.length; i++) {
                let element = this.contacts[i].name;
                element = element.toLowerCase();
                this.userResearch = this.userResearch.toLowerCase();
                if(element.includes(this.userResearch)){
                    this.contacts[i].visible=true;
                }else{
                    this.contacts[i].visible=false;
                }

                
                }

        
        },
        elimina: function (index) {
            this.contacts[this.indexChat].messages.splice(index, 1);
            this.isHidden =[];
           
        },
        openPanel: function (index) {
            let count=0;
            if(this.isHidden[index]==true){count++}
            for (let i = 0; i < this.contacts[this.indexChat].messages.length; i++) {
                this.isHidden[i]=false;  
            }
            if(count==0){
            this.isHidden[index]=true; 
            count++;
           }else{
            count=0;
           }
        },
    },

}).mount("#app");