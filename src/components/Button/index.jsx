import { Container } from "./styles"

export function Button({ title, loading = false, icon: Icon, darkMode, ...rest }){
    return(
        <Container
            type='button'
            $disale={loading.toString()}
            $darkMode={darkMode}
            {...rest}
        >
            { Icon && <Icon size={20} /> }
            {loading ? 'Carregando...' : title}
        </Container>    
    )
}