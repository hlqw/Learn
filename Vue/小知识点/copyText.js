const copyToClipboard = (text) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)

copyToClipboard("Hello World!")

