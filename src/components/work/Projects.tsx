import { getPosts } from '@/app/utils/utils';
import { Flex, Heading } from '@/once-ui/components';

import { ProjectCard } from '@/components';

interface ProjectsProps {
    range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', 'work', 'projects']);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const mainProjects = sortedProjects.filter((post) => !post.metadata.archive);
    const archiveProjects = sortedProjects.filter((post) => post.metadata.archive);

    const displayedProjects = range
        ? mainProjects.slice(range[0] - 1, range[1] ?? mainProjects.length)
        : mainProjects;

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post, index) => (
                <ProjectCard
                    priority={index < 2}
                    key={post.slug}
                    href={`work/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
                    link={post.metadata.link || ""}
                />
            ))}
            {archiveProjects.length > 0 && !range && (
                <>
                    <Heading as="h2" variant="display-strong-s" marginTop="xl">
                        Archive
                    </Heading>
                    {archiveProjects.map((post) => (
                        <ProjectCard
                            key={post.slug}
                            href={`work/${post.slug}`}
                            images={post.metadata.images}
                            title={post.metadata.title}
                            description={post.metadata.summary}
                            content={post.content}
                            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
                            link={post.metadata.link || ""}
                        />
                    ))}
                </>
            )}
        </Flex>
    );
}