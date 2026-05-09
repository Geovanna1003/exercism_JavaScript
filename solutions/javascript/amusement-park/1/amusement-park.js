
export function createVisitor(name, age, ticketId) {
    return {
       name: name, 
       age: age, 
       ticketId: ticketId
   }
   
}
createVisitor('Verena Nardi', 45, 'H32AZ123');


export function revokeTicket(visitor) {
  
     visitor.ticketId = null
 
  return visitor
}


export function ticketStatus(tickets, ticketId) {
   
   if(tickets[ticketId] === undefined) {
     return  'unknown ticket id';
   } else if (tickets[ticketId] === null) {
      return 'not sold';
   } else {
     return `sold to ${tickets[ticketId]}`;

   }
}


export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}


export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
