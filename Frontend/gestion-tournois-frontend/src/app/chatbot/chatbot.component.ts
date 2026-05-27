import { Component, OnInit } from '@angular/core';
import { DialogflowService } from '../dialogflow.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: any[] = [];
  userMessage: string = '';
  isChatbotVisible = false;


  constructor(private dialogflowService: DialogflowService) {}

  ngOnInit(): void {}


  toggleChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;
  }


  sendMessage() {
    const sessionId = 'chatbot-tournify-sxev'; 
    this.dialogflowService.sendMessage(sessionId, this.userMessage).subscribe((response) => {
      console.log(response);

      const botReply = response.queryResult.fulfillmentText;

      this.messages.push({ type: 'user', text: this.userMessage });
      this.messages.push({ type: 'bot', text: botReply });

      this.userMessage = '';
    }, (error) => {
      console.error("Erreur lors de l'envoi du message à Dialogflow :", error);
    });
  }
}
