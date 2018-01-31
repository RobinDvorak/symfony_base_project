<?php declare(strict_types=1);

namespace App\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @package App\Controller\Frontend
 * @author  Robin Dvorak
 */
class MainController extends Controller
{
    /**
     * @Route("/", name="main")
     *
     * @return Response
     */
    public function getAction(): Response
    {
        return $this->render('frontend/main/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
        ]);
    }
}
