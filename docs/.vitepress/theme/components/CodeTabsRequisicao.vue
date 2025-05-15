<template>
  <CustomCodeGroup>
    <!-- 🌐 cURL -->
    <template #tab-0>
      <CustomTabLabel src="/icons/curl-icon.svg" alt="cURL">cURL</CustomTabLabel>
    </template>
    <template #panel-0>
      <pre><code class="language-bash">curl -X GET 'https://SeuDominio.involves.com/v1/123/pointofsale' \
  -H 'Authorization: Bearer {{token}}' \
  -H 'Accept: application/json'</code></pre>
    </template>

    <!-- 💻 JavaScript (Fetch API) -->
    <template #tab-1>
      <CustomTabLabel src="/icons/js-icon.svg" alt="JavaScript">JavaScript</CustomTabLabel>
    </template>
    <template #panel-1>
      <pre><code class="language-js">fetch('https://SeuDominio.involves.com/v1/123/pointofsale', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer {{token}}',
    'Accept': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>
    </template>

    <!-- 🐍 Python (requests) -->
    <template #tab-2>
      <CustomTabLabel src="/icons/python-icon.svg" alt="Python">Python</CustomTabLabel>
    </template>
    <template #panel-2>
      <pre><code class="language-python">import requests

url = "https://SeuDominio.involves.com/v1/123/pointofsale"
headers = {
  "Authorization": "Bearer {{token}}",
  "Accept": "application/json"
}

response = requests.get(url, headers=headers)
print(response.json())</code></pre>
    </template>

    <!-- 🟢 Node.js (axios) -->
    <template #tab-3>
      <CustomTabLabel src="/icons/nodejs-icon.svg" alt="Node.js">Node.js</CustomTabLabel>
    </template>
    <template #panel-3>
      <pre><code class="language-js">const axios = require('axios')

axios.get('https://SeuDominio.involves.com/v1/123/pointofsale', {
  headers: {
    'Authorization': 'Bearer {{token}}',
    'Accept': 'application/json'
  }
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err))</code></pre>
    </template>
  </CustomCodeGroup>
</template>
