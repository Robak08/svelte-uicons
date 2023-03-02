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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.433 20.4a1 1 0 0 0-1.334.468 2 2 0 0 1-2.7.926L17 20.726v-4.849a3.027 3.027 0 0 0-.99-2.227l-2.594-2.25 2.747-3.566 6.3 4.009a1 1 0 0 0 1.074-1.688s-10.46-6.617-10.864-6.804A4.98 4.98 0 0 0 10.835 3H9.657a2.983 2.983 0 0 1-2.122-.878L5.707.293a1 1 0 0 0-1.414 1.414l1.828 1.829A4.968 4.968 0 0 0 9.657 5h1.156L8.621 7.852A3.018 3.018 0 0 0 8 9.68v3.084a.994.994 0 0 1-.553.894l-2.894 1.447a1.132 1.132 0 0 0-.108.063L3.159 14.6a2 2 0 0 1-.973-2.655A1 1 0 0 0 .371 11.1a4 4 0 0 0 1.963 5.318l16.231 7.184a3.97 3.97 0 0 0 1.727.4 4.026 4.026 0 0 0 1.33-.228 3.973 3.973 0 0 0 2.278-2.045 1 1 0 0 0-.467-1.329ZM8.342 15.447A2.984 2.984 0 0 0 10 12.764v-1.681l4.677 4.058a1.007 1.007 0 0 1 .323.736v3.963l-8.192-3.626ZM17.5 5A2.5 2.5 0 1 0 15 2.5 2.5 2.5 0 0 0 17.5 5Z"/></svg>
  