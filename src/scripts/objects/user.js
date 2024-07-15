

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = [];
        repositories.forEach((repository) => {
            this.repositories.push({ name: repository.name, url: repository.html_url, forks: repository.forks_count, stars: repository.stargazers_count, watchers: repository.watchers_count, language: repository.language })
        })
    },
    setEventsUser(eventsGit) {
        this.events = [];
        eventsGit.forEach((e) => {
            if (e.type === 'PushEvent') {
                this.events.push({
                    type: e.type, name: e.repo.name, message: e.payload.commits[0].message
                })
            } else if (e.type === 'CreateEvent') {
                this.events.push({
                    type: e.type, name: e.repo.name, message: "Sem mensagem de commit"
                })
            }
        })
    }
};

export { user }