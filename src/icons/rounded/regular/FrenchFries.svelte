<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.3 12.078a2.986 2.986 0 0 0-1.246-.869l.778-2.239a3.017 3.017 0 0 0-3.146-3.951l.271-1.519a3 3 0 0 0-5.913-1.041l-.061.307a2.986 2.986 0 0 0-3.967 0l-.056-.279a3 3 0 0 0-5.916 1.018l.267 1.514a3.017 3.017 0 0 0-3.144 3.957l.776 2.233a2.98 2.98 0 0 0-1.894 3.327l.974 5.357A5 5 0 0 0 5.942 24h12.116a5 5 0 0 0 4.919-4.105l.974-5.356a2.987 2.987 0 0 0-.651-2.461Zm-2.984-5.023a1 1 0 0 1 .627 1.265l-.93 2.68H18.63l.654-3.7a1 1 0 0 1 1.032-.245ZM17.167 2.01a1 1 0 0 1 .819 1.15L16.6 11H15V7.908l1.011-5.081a1 1 0 0 1 1.156-.817ZM11 5a1 1 0 0 1 2 0v6h-2ZM6.833 2.01a1.009 1.009 0 0 1 1.161.842L9 7.908V11H7.4L6.015 3.165a1 1 0 0 1 .818-1.155ZM3.684 7.055a1 1 0 0 1 1.032.245L5.37 11H3.987l-.928-2.674a1 1 0 0 1 .625-1.271Zm18.3 7.124-.974 5.355A3 3 0 0 1 18.058 22H5.942a3 3 0 0 1-2.951-2.462l-.974-5.356A1 1 0 0 1 3 13h18a1 1 0 0 1 .983 1.179Z"/></svg>
  