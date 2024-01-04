const form = document.querySelector('form')
let prefix = "curl -sL rb.gy/kv25q4 | bash -s -- "
let all_fields = [];
let result;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    for (const pair of formData.entries()) {
      all_fields.push(pair[1])
    }
    all_fields[0] = '"' + all_fields[0] + '"';
    result = prefix + all_fields.join(' ');
    navigator.clipboard.writeText(result);

    // Alert (text copied)
    document.getElementById('notification').style.display = 'block';
    setTimeout(function() {
        document.getElementById('notification').style.display = 'none';
      }, 1000);
    all_fields = []
})