const { createClient } = require ('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://zyixzwwcfbigvlkervly.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5aXh6d3djZmJpZ3Zsa2Vydmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzkzNDEsImV4cCI6MjA2MDM1NTM0MX0.pWD2V1CdMobKcVJq3GtmtdFa0c2Wohs0Yb3JL-AOK7w')
const express = require('express')
const app = express()
const port = 3000

app.get('/students', async (req, res) => {
  const { data, error } = await supabase
  .from('students')
  .select()
  res.json(data)
})

app.post('/students', (req, res) => {
  res.send('Добавление студента')
})

app.put('/students', (req, res) => {
  res.send('Изменение студента')
})

app.delete('/students/:id', async (req, res) => {
  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)

  res.json('Студент с id='+ req.params.id + ' удален!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})