function searchBus(){
  const source = document.getElementById('source').value;
  const destination = document.getElementById('destination').value;


  db.collection('buses')
  .where('source', '==', source)
  .where('destination', '==', destination)
  .get()
  .then(snapshot => {
    let output = '';
    snapshot.forEach(doc => {
      const d = doc.data();
      output += `<p>Bus name: ${d.busNo} | Type: ${d.type} | Contact: ${d.contact}</p>`;
    });
    document.getElementById('results').innerHTML = output || 'No buses found';
  });
}