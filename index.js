document.addEventListener('DOMContentLoaded', function() {
  const showProjectsBtn = document.getElementById('show-projects');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const sidebar = document.getElementById('sidebar');
  const projectList = document.getElementById('project-list');

  showProjectsBtn.addEventListener('click', function() {
      fetch('https://api.github.com/users/Midyan3/repos')
          .then(response => response.json())
          .then(repos => {
              projectList.innerHTML = ''; 
              repos.forEach(repo => {
                  const projectDiv = document.createElement('div');
                  projectDiv.classList.add('project-card');
                  projectDiv.innerHTML = `
                      <h3>${repo.name}</h3>
                      <p>${repo.description || ''}</p>
                      <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                  `;
                  projectList.appendChild(projectDiv);
              });
              sidebar.style.right = '0';
          })
          .catch(error => {
              projectList.innerHTML = `<p>Error loading projects: ${error.message}</p>`;
          });
  });

  closeSidebarBtn.addEventListener('click', function() {
      sidebar.style.right = '-400px'; 
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.hero p');
  const textContent = text.textContent;
  let delay = 0;
  text.innerHTML = textContent.split('').map(char => {
    if (char === ' ') return char;  
    const span = `<span style="animation-delay:${0.05 * delay}s">${char}</span>`;
    delay++; 
    return span;
  }).join('');
});
  
  


