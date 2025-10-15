Get-Content -Raw src/components/Footer.js | % { [System.Text.Encoding]::UTF8.GetString([System.Text.Encoding]::Default.GetBytes()) }
