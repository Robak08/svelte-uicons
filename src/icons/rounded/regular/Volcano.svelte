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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.876 24H3.124a3.121 3.121 0 0 1-2.4-5.118l8.146-8.571A1 1 0 0 1 9.6 10h4.8a1 1 0 0 1 .725.311l8.1 8.522A3.119 3.119 0 0 1 20.876 24ZM6.224 16l-4 4.211a1.132 1.132 0 0 0 .9 1.789h17.752a1.125 1.125 0 0 0 .86-1.837L17.777 16H16a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 0-2 0v1a1 1 0 0 1-2 0v-1a1 1 0 0 0-1-1ZM12 14a2.987 2.987 0 0 1 2 .766A2.987 2.987 0 0 1 15.878 14l-1.9-2h-3.952l-1.9 2a2.99 2.99 0 0 1 1.874.766A2.987 2.987 0 0 1 12 14Zm7-5a2.971 2.971 0 0 1-1.38-.342A3.987 3.987 0 0 1 16 9h-2a1 1 0 0 1 0-2h2a1.993 1.993 0 0 0 1.116-.34 1 1 0 0 1 1.225.082A.991.991 0 1 0 19 5a1.107 1.107 0 0 1-1.122-.653 1.99 1.99 0 0 0-2.857-1.077 1 1 0 0 1-1.336-.335 2 2 0 0 0-3.37 0 1 1 0 0 1-1.336.335 1.989 1.989 0 0 0-2.857 1.077 1.015 1.015 0 0 1-1.034.667L4.977 5a.991.991 0 1 0 .683 1.741 1 1 0 0 1 1.224-.081A1.993 1.993 0 0 0 8 7h2a1 1 0 0 1 0 2H8a3.987 3.987 0 0 1-1.62-.342C2.165 10.568.029 4 4.527 3.037a3.99 3.99 0 0 1 4.642-1.856 4.01 4.01 0 0 1 5.662 0 3.99 3.99 0 0 1 4.642 1.856A3 3 0 0 1 19 9Z"/></svg>
  