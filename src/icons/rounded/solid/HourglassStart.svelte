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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.957 4.577a3.941 3.941 0 0 0-.918-3.155A4.013 4.013 0 0 0 16.995.026h-9.99c-1.17 0-2.279.51-3.043 1.398a3.938 3.938 0 0 0-.917 3.157c.406 2.699 1.885 5.198 4.401 7.444-2.517 2.246-3.996 4.745-4.401 7.444a3.941 3.941 0 0 0 .917 3.157 4.009 4.009 0 0 0 3.043 1.397h9.99c1.17 0 2.279-.508 3.044-1.396a3.94 3.94 0 0 0 .918-3.154c-.403-2.69-1.884-5.191-4.406-7.449 2.522-2.258 4.003-4.759 4.406-7.448ZM17.926 4.4c-.984 2.432-3.051 4.422-4.609 5.662l-.69.551c-.365.29-.88.29-1.245.002l-.704-.559C9.121 8.825 7.059 6.844 6.073 4.4A1.001 1.001 0 0 1 7 3.026h10a.996.996 0 0 1 .927 1.374Zm-5.855 4.098-.07.056-.082-.065c-1.047-.828-2.35-2.029-3.271-3.462h6.702c-.924 1.429-2.229 2.636-3.278 3.472Z"/></svg>
  