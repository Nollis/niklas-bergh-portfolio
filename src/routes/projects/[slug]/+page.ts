import { error } from '@sveltejs/kit';
import { getProjectById, projects } from '$lib/content/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = getProjectById(params.slug);
	
	if (!project) {
		throw error(404, 'Project not found');
	}

	// Find adjacent projects for navigation
	const currentIndex = projects.findIndex(p => p.id === params.slug);
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	return {
		project,
		prevProject,
		nextProject
	};
};





